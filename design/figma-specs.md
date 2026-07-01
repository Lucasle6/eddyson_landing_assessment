# Figma specs — Case study Jr (eddyson partner page)

Extraído del dump de CSS de layers (2026-07-01). Page frame "Specimen": 1495×5638, bg `#F8F8F8`.
Fonts: **Quando** (serif H1/quotes), **DM Sans** (todo), **DM Mono** (eyebrows verticales), **Roboto** (solo dentro de las UI mockups). Colors: brand `#FF8831`, ink `#212121`, ink-strong `#161616`, dark `#161616`, canvas `#F8F8F8`, grey text `#6F6F6F/#949494/#474747`, card-dark `#282828`.

## Top bar (global) — Frame 1073714837
1447×41, left 24 top 24, bg `#212121`, flex center. Texto "We're hiring! Check out our open positions!" DM Sans 400 16/21 `#FFFFFF` (link "open positions" subrayado).

## Header (global)
- Logo eddyson: 177×54, left 122 top 92 (naranja `#FF8831` + gris `#8D8D8D`).
- Eyebrow vertical derecha "eddyson | 2026": DM Mono 300 12/16 uppercase +2%, `#949494`, left 1455 top 91, rotate 90°.

## Hero (slice `hero`) — HECHO
- H1 "Your partner in the EDI jungle": Quando 400 62/160% `#212121`, box 566×198, top 199.
- Orange block (Frame 1073715003): 1447×520, left 24 top 459, `#FF8831`, radius 24 top.
- Eyebrow vertical "Select. Connect. Evolve.": DM Mono 300 12/16 uppercase +2%, `rgba(255,255,255,.5)`, left 38 top 125, rotate -90°.
- Content col (Frame 1073714994): 484 wide, left 102 top 109, gap 36; heading+copy gap 16.
  - topline "Fast + Scalable + Successful": DM Sans 500 36/47 `#161616`.
  - copy: DM Sans 400 18/160% +2% `#212121`.
  - buttons row gap 24, h57: secondary border 2px `#161616` radius 8 pad 18/24 text DM Sans 500 16/21 +2% `#212121`; primary bg `#161616` text `#F8F8F8`, shadow 0 1 8 rgba(0,0,0,.25).
- UI cluster (Frame 1073714996): 650×587, left 790 top 337 (usado como imagen compuesta).
- Logo strip (Frame 1073714997): 1447×167, centrado, top 979, `#ECECEC`, radius bottom 24, border-top 1px. Logos row (Frame 1073714998): flex row gap 50, 1575×63, left -84 top 52 (bleeds ambos lados, clip). 10 logos grey `#6F6F6F`: Bauhaus 125×25, Wagner 121×46, Lekkerland 117×38, B.Braun 121×37, TDK 121×25, Nord 84×62, Jockey 117×36, Mitegro 122×51, Spax 123×40, Erich-Jaeger 74×63. → usar banner PNG.

## PartnerProgram (slice `partner_program`) — Frame 1073715035
- 1243×782, centrado, top 1246, bg `linear-gradient(222.63deg, #212121 15.95%, #000000 83.67%)`, radius 24, padding 70 vertical, gap 70, overflow con curvas de fondo (Frame 1073715037: líneas 22px `#BD10E0`/`#50E3C2`/`#FF4C4C`).
- Header (Frame 1073715012): pad 0 252, gap 8. Badge "PARTNER PROGRAM": pill bg `#282828` border 2px `#FF8831` radius 30, pad 4/10, DM Sans 400 12/16 uppercase +2% `#FFF`. Headline "Efficient processes right from the start": DM Sans 400 36/140% `#F8F8F8` (647 wide). Sub: DM Sans 300 24/140% +2% `#ECECEC` (739 wide).
- Cards row (Frame 1073715036): pad 0 102, gap 20, 3 cards. Card: 333 wide, bg `#282828`, radius 16, shadow. Imagen top pad 24 (285×178 radius 8). Texto pad 0/24/32 gap 16: título DM Sans 500 18/23 `#FFF`; body DM Sans 400 16/140% +2% `#ECECEC`. Imágenes: handshake/exchange/general (connect/qualify/launch en public).

## "Different partnership?" band (entre PartnerProgram y EDI)
- Quote "Do you have a different partnership model in mind? Let's talk.": Quando 400 36/140% center `#000`, 737 wide, left 379 top 2572. Underline naranja Rectangle 3911: 179×7 `#FF8831` left 813 top 2659. Líneas laterales `#949494` 1px.

## EdiExpertise (slice `edi_expertise`) — Frame 1073715038 + cards
- Intro (Frame 1073715038): 990 wide, left 253 top 2142, gap 88. Headline "You Sell ERP and IT Solutions, We Provide EDI Expertise": DM Sans 700 36/140% `#070707`. Body: DM Sans 300 36/140% `#070707`.
- 6 cards (Frame 1073715043/45/46/47/48/49): 412×448, radius 24, pad 30/36, gap 42, justify flex-end (texto abajo). Imagen de fondo con gradiente oscuro. Título DM Sans 700 24/140% `#FFF`; body DM Sans 400 24/160% +2% `#FFF`. Grid 3 col: y2836 (Earn/Innovative/Grow... left 89/541/993), y3324 (Diverse/Competitive/Long-term, left 89/542/994). Imágenes: Earn, Technology, Grow, Diverse, Competitive, Collaboration (avif en public).

## ContactForm (slice `contact_form`) — Frame 1073715050 + 1073714770
- Texto izq (Frame 1073715050): 612 wide, left 126 top 4086, gap 16. Headline "Your First Step Toward Partnership with eddyson": DM Sans 700 36/140% `#070707`. Body: DM Sans 300 36/140% `#474747`.
- Form card (Frame 1073714770): 558×746, left 848 top 3971, bg `#FFF`, radius 24, pad 36, gap 24, shadow. Campos (Text Field): label Roboto 12 `#474747` con status pill `#C43A36`; input border 1px rgba(22,22,22,.16) radius 8 pad 12, placeholder Roboto 14 `#949494`. Checkbox privacy `#E46A1C`. Submit: bg `#161616` radius 8 pad 18/24 h57, "Submit" DM Sans 500 16/21 +2% `#F8F8F8`.
- Fondo decorativo: grid de cuadrados 120px (Rectangle 41xx) con opacidades varias + gradiente `#F8F8F8`.

## Footer (slice `footer`) — Frame Footer
- 1495×746, bg `#161616`. Logo eddyson 177×54 left 122 top 120 (naranja + `#F8F8F8`).
- Col Address (Frame 1073715456): left 126 top 234, gap 16. Título "Contact"/labels DM Sans 700 24/140% `#FFF`; texto DM Sans 400 24/140% +2% `#FFF`.
- Col Contact (Frame 1073715459): left 631 top 184.
- Col Links + Follow us (Frame 1073715463): left 1011 top 184, gap 68. Social: xing 43×42, linkedin 39×41 (`#FFF`). Botón "Contact Sales" (Frame 1073714830): bg `#F8F8F8` radius 8 pad 18/24 h62, DM Sans 500 20/26 +2% `#161616`, shadow.
- Certificados (Frame 1073715458): left 122 top 522, gap 36, 4 imágenes (Crefozert, Software hosted/made in Germany, GS1) tamaños 104/81/90/74.
