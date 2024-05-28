1. Linked 'stylesheet' or external CSS file `style.css` to the HTML Head Section.

2. Description about Sidebar (Left Bar):
    - Used <aside> Element with class="sidebar".
    - Used <nav> for Navigation Bar in Sidebar.
    - Used <a href="#section-name"> for Navigating through sections to make the site 'Interactive'.
        These are linked with every section's id attribute - <section id="section-name">.
    - In CSS: For Full Screen I use - .sidebar { "height: 100vh;" }
        For staying 'fixed' and 'not scrollable' I use - .sidebar { position: fixed; top: 0; left: 0; }

3. For Layout Design - I use 3 different layout features for 3 different sections:
    - For Showcase Section, I use - { display: flex; }
    - For Designers Section, I use - { display: grid; }
    - For Packages Section, I use - .basic { float: left; } and .pro { float: right; }

4. For Packages Section - I create a JavaScript file named `script.js` and connect it to the HTML file.
    - I use JavaScript for the `Packages` section to make the plus(+) and minus(-) buttons interactive.
    - In JavaScript I use 'click' event on plus(+) and minus(-) button. also with 'Sign Up' button.
    - When +/- event occur, 'increase'/'decrease' function will trigger, and update the 'room' text and the amount.
    - When Sign-Up click event occurs, the text `Thank you for choosing 1 room` will show with updated no. of rooms.
    - As I used setTimeout() [4 sec] and click event on that message part, it will again desappear / hide.

5. For Contact Section - I use 'required' attribute for all the Input Elements in the Form.
    So, Form will not get submitted if any one of the fields is empty.

6. Lastly, I tried to keep the codes clean in HTML files. That's why, I use less classes there.
    - For CSS, I mostly use parent-child relationship selectors for clear readability.
    - For JS, I didn't use any JS code (like onclick=func() or anything) in HTML file.
        Everything I did in JS File by using addEventListener().
        And I get most elements in JS by using querySelector().


Thank you & Best Regards,
  Muhammad Iftekhar Hasan
  Email: mihsbd8@gmail.com
  Mobile: 01833-3733635