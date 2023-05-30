# my-portfolio-site

**PLANNING:**

This project is a personal portfolio showcasing my projects. 


&nbsp;

**BUILDING:**

While creating this project, I relied on my plan as a roadmap and followed it closely to ensure that I stayed on track. By using the plan as a guide, I was able to work through each step efficiently.

- To enhance user experience and ease of navigation, my first task was to develop a user-friendly navigation bar that allowed users to quickly access different sections of the web page.

- After completing the navigation bar, I proceeded to develop the hero section of the web page. This section aimed to provide users with a brief introduction to myself and my portfolio. To make the section more engaging, I also included an image. By including this content, I hoped to capture the user's attention and encourage them to explore the rest of the web page.

- I then worked on the “About me” section that provided more detailed information about myself and my reasons for applying to the programme. To make the section more visually appealing and user-friendly, I incorporated a "Read More" button that allowed users to access additional information. This feature enabled users to click the button to expand the text and read more, and then click it again to collapse the text and show less.

 
- I then moved onto the "Web Development Career" section, where I shared my passion for web development and outlined my motivations for pursuing it as a career. 

- Lastly, I created a project section that showcased the various projects I worked on throughout the application process. To display the projects in an organised and visually appealing manner, I utilised cards with buttons that allowed users to easily access and explore the projects further. The buttons enabled users to view the webpage on GitHub pages or to access the GitHub repository. 

- After completing the initial layout and functionality of the portfolio, I shifted my focus to implementing CSS styling. Additionally, I incorporated media queries to ensure that the website was responsive and easily accessible on different devices and screen sizes.

 
- To further enhance the user experience and add more interactivity to the portfolio, I utilised JavaScript to make the navigation bar responsive and functional across different screen sizes. Additionally, I implemented JavaScript to enable the "Read More" button to work.

 - For the read more button I implemented a function called "readMore()" which is triggered when a user clicks on a "Read More" button. The function checks if there is hidden text to be displayed and toggles its visibility along with changing the button text between "Read More" and "Read Less". 

- As for the navigation bar i used document.querySelector() method to get HTML elements by their class names and defines an on-click event handler for the navbar, when clicked, the function toggles the visibility of the menu and changed the nav icon depending on whether the menu is open or closed.

&nbsp;

**DEBUGGING:**

During the development of this project, I encountered some errors, particularly within the JavaScript section. 

- One of the issues I encountered was that the code I had written was not being applied to the "Read More" button. After some troubleshooting, I discovered that the ClassList property was not being accessed due to a typo in the class name. By identifying and correcting this error, I was able to successfully implement the "Read More" button.

- Another issue I encountered was related to the responsive navigation bar, which was showing menu items before the button was clicked. After some investigation, I realised that the issue was caused by not setting the responsive menu items to display as hidden by default. Once I corrected this, the navigation bar worked as intended.

- I also encountered an error in CSS, where the CSS media query code was being implemented outside of the media query. To resolve this issue, I used developer tools to identify the root cause and discovered that the problem was due to incorrect indentation within the media query.

- To identify and resolve the errors encountered during the development of this project, I utilised a variety of resources. I used developer tools to pinpoint where the errors were stemming from, and when I didn't understand error messages, I turned to Google to help me find solutions. Through these efforts, I was able to successfully troubleshoot and fix the errors I encountered, which ultimately helped me improve the functionality and user experience of the portfolio.

