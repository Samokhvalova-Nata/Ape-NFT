# Landing Ape NFT

Adaptive and cross-browser layout - mobile from 360px to 480px (elastic layout, should stretch), tablet - 768px, desktop - 1280px.

Use the Mobile-first approach.

Click link: [Ape NFT](https://samokhvalova-nata.github.io/Ape-NFT/).

## The application consists of 8 sections:

### Header

Contains the logo, burger menu on all versions. The logo is a link to the page.

Burger-menu contains a close button, navigation menu, social media. 
Each menu item must be clickable, and when clicked, the mobile menu should close and
smoothly scroll to the corresponding section on the page.

Desktop ![Header](/assets/header-desktop.png)

Mobile

![Header](/assets/header-mobile-close.png)
![Header](/assets/header-mobile-open.png)

### Hero

Clicking on "Meet Apes" smoothly scrolls to the Mint section.

### About

The section contains a title, two text blocks, an image, and a banner. 
The banner (red line with inscriptions) should have a "moving line" animation.

Tablet

![About](/assets/about-tablet.png)

Mobile

![About](/assets/about-mobile.png)

### MIND map

When laying out cards on a tablet and desktop, used CSS Grid. In the mobile
version, cards are placed in a slider.

The slider can be switched by dragging or
buttons, and it has standard behavior (not infinite). Clicking or dragging
scrolls one slide. The red card is active and contain a link.

Tablet

![MIND](/assets/mind-map-tablet.png)

Mobile

![MIND](/assets/mind-map-mobile.png)

### FAQ

By default, the first answer is open. 

On mobile, there is only a title and text that appears when opened. Starting from the tablet version, when opening different items, the image is also change. Only one answer can be open at a time.

Tablet

![FAQ](/assets/faq-tablet.png)

Mobile

![FAQ](/assets/faq-mobile.png)

### Arts
The section contains a slider on all versions.

On mobile, there is only one slide, on tablet - two, on desktop - four. The slider can be switched by dragging or buttons, and it has standard behavior (not infinite). Clicking or dragging scrolls one slide.

Desktop 

![Arts](/assets/arts-desktop.png)

Tablet

![Arts](/assets/arts-tablet.png)

Mobile

![Arts](/assets/arts-mobile.png)

### Contact Us 
The form is validated.
Form fields are required.

Tablet

![ContactUs](/assets/contact-us-tablet.png)

Mobile

![ContactUs](/assets/contact-us-mobile.png)

### Footer
Contains copyright information.


## For start use command:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Technology Stack:

![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)&nbsp;
![HTML](https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;
