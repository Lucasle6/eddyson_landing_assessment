import { createSliceMachineManager } from "@slicemachine/manager";
import pLimit from "p-limit";

const manager = createSliceMachineManager();

async function main() {
  const start = performance.now();

  if (!(await manager.user.checkIsLoggedIn())) {
    throw new Error(
      "No estas logueado. Corre `npx prismic-cli login` primero e intenta de nuevo."
    );
  }

  await manager.plugins.initPlugins();

  const remoteTypes = await manager.customTypes.fetchRemoteCustomTypes();
  const remoteSlices = await manager.slices.fetchRemoteSlices();

  const limit = pLimit(8);

  console.log(`Trayendo ${remoteSlices.length} slices y ${remoteTypes.length} custom types...`);

  let pulledSlices = 0;
  await Promise.all(
    remoteSlices.map((model) =>
      limit(async () => {
        await manager.slices.createSlice({
          libraryID: "./src/slices",
          model,
        });
        pulledSlices++;
        console.log(`Slices: ${pulledSlices}/${remoteSlices.length}`);
      })
    )
  );

  let pulledTypes = 0;
  await Promise.all(
    remoteTypes.map((model) =>
      limit(async () => {
        await manager.customTypes.createCustomType({ model });
        pulledTypes++;
        console.log(`Custom types: ${pulledTypes}/${remoteTypes.length}`);
      })
    )
  );

  const end = performance.now();
  console.log(`Listo en ${((end - start) / 1000).toFixed(1)}s`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
