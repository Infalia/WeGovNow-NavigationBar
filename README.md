# WeGovNow Navigation Bar
Barebone WeGovNow mobile friendly and accessible Navigation Bar

The updated version introduces: 

- Use of aria tags such as ``aria-hidden`` ``aria-expanded`` ``aria-controls``
- Use of ``tabindex``
- Skip to content link
- Outline border on links
- Correct contrast on focus and on active
- Mobile friendly
- Keyboard friendly
- Mobile menu opens on ``ENTER`` and closes on ``ESC``
- Mobile menu closes when click or tap outside
- Mobile menu circles between menu items when pressing ``TAB``

## How to use

You only need [inline.html](inline.html)

Unified WeGovNow User Management (UWUM) distributes the barebone version (the content of [inline.html](inline.html)) which includes all-in-one, namely:

- CSS script
- HTML markup
- Vanilla JavaScript (no external libraries are needed)

*The appropriate menu items are defined in UWUM and includes the menu translations*

**NOTE:** The "Skip to content" ("Salta al contenuto") link text should also be translated on UWUM side

### Tips

The navigation bar position is fixed which means that most probably will land on top of your component. You should take responsibility to include appropriate CSS rules to overcome this. For example you could:

1)

Wrap your component in a container 

`<div class="myComponentContainer">...</div>`

Apply the following CSS

`.myComponentContainer { margin-top: 45px; }`

2) 

Right after the WeGovNow Navigation  Bar add the following 

`<div class="wgn-spacer"></div>`

Apply the following CSS

`.wgn-spacer { height: 34px; }`

## Demo

All demos are based on inline.html (no other file is needed)

To see the Navigation Bar in action click on the following links:

