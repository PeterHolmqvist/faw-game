# Faw Game

FAW Game is Paper, Scissors and Rocks Game, with a twist. This games serves as a nice break to get your mind on something else when you stuck coding or just for laughs when you're boored.  

While the this is being a learning experience I tried to keep things as simpel as possible, not invent the wheel twice and make things more complicated than it has to be. Thats the beauty with javascript that you can build amzing ting with simplistic lines of code. And I hope it come across in the FAW Game project.

![Responsice Mockup](media/love_maths_mockup.png)

## Planning

fisrt things fisrt. 

The wireframe used for the project were a very helpful resource

![Wireframe](media/love_maths_mockup.png)

## Features 



- __The FAW Game Selections Area__

  - Featured on top of the page and mmost notable for the user is the selections icons, which is actually buttons in form of emojis. If you is familiar with paper, rock and scissors you it is easy understandable. If the user is not familiar with the addtion of the spock and lizards emojis there is a link just placed above. It opens in a seperate tab, and the font-color is nit affected by visiting the rules page, for aesthetic reasons. 

  The beige background color is neutral and provides a good contrast for the elemnts displayd on the game page. 

![Logo](assets/images/gamearea.png)

- __The Results Area__

  - This section will allow the user to keep track of the score by viewing the past selection being renderd with a function that creates new divs wich is stacked in a column. To make it even more clear to the user the winner emoji is bieng enlarged and the loosers emoji is being darkend down with a lower opacity.

![Game](media/love_maths_icons.png)

- __The Scores Area__

  - The scores area is just a span and a function that increment the scores by one and print it out in the document with the innerText method. I also included a emoji that represent the user and the comuter. The player emoji is choossen with conideration of geder neutrality and inclusion.


![score](media/love_maths_answer.png)

For some/all of your features, you may choose to reference the specific project files that implement them.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement

- Sound effects
- Text bubbles

## Testing 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project???s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 11 functions in this file.
      - Function with the largest signature takes 2 arguments, while the median is 0.
      - Largest function has 10 statements in it, while the median is 3.
      - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-maths/


## Credits 

Credits be where credits due...

### Content 

When I started out I hade my wireframe to go by when scrolling youtube for inspiration. I came across Kyle's channel 
"Web Devs Simplyfied"
[Specific YouTube Tutorial](https://youtu.be/1yS-JV4fWqY)

His game design pretty much matched my wireframe and the way he made the result render on the screen. I aslo liked how his code looked.

the fonts is from google fonts:

https://fonts.google.com


### Media

- The photo for game rules comes from: 

https://www.instructables.com/How-to-Play-Rock-Paper-Scissors-Lizard-Spock/

- the emojis used in FAW Game are from:

https://www.instructables.com/How-to-Play-Rock-Paper-Scissors-Lizard-Spock/

## Other Resources 

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it???s important to allow enough time to showcase your best work! 

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message 
  - Make sure to keep the messages in the imperative mood 

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ???image1.png??? consider naming it ???landing_page_img.png???. This will ensure that there are clear file paths kept. 

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process! 