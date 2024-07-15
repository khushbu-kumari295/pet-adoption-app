# Pet Cafe and Adoption Center

## About
This website is a Single-Page Application named as "Fur-Ever" Paradise that describes about the pet cafe and adoption center that is located in Seattle. Here you can meet with the Residential cats/dogs who are the pet ambassadors, see the pet hours and register to come to the cafe. It also have Adoptable cats and dogs available for adoption. This website also schedules some pet events related to upcoming celebration like Christmas, 5k dog run and yoga with cats.

## Complex UX
### Carousel
Present in the About page and can be reached via clicking the "About" button in Navigation bar. 
It has four sections which display:
1. New Adopters's Checklist
2. Yoga with Cats Event
3. 5K Dog Run Event
4. Petmas Celebration Event

All the carousels sections have navigation to different pages in website. The carousel have transformation used in it to show sliding behavior.
### Accordion 
Present in the FAQ page, reachable by clicking the "Adoption FAQ" in the Navigation bar.
It has two separated sections General and Fostering.


### Form
Form can be reached by clicking on "Plan a visit" in the Navigation bar.
This form has a <strong>changing section</strong> 
- On selecting "Purpose of visit", there are 2 kind of changes. 
    - If you select "Lounge visit" or "Pet Adoption", it will show a control to select date and time for the visit along with the other inputs required like number of persons visiting, pet group etc.
    - If you select events like "Yoga with cats", "5k Dog Run" or "Petmas celebration", it won't ask for date and time since these events are pre-planned.
- The form is storing values in application state.
- The form shows required fields by a red astrick.
- The form shows the validation error after the field is clicked atleast once and the value is incorrect, or when the submit is clicked and values are invalid.
- The Form won't be submitted if there are any validation errors.
- After form submission, the website will re-direct you to a schedules page where you can view your upcoming schedules. You can cancel those schedules as well from that page.

## Loading Indicator
To view the loading Indicator, select either the "Cat" menu or the "Dog" menu, and in the sub-menu, select the "Adoptable" or "Resident" option. This will load the list of Pets available in that category. In this I have used animation to show the spinner while loading the pet data.

Another place where I have added spinner is when the website shows upcoming schedules. This page can be reached via form submission in "Plan a visit" page. 

## Fake services
For fetching the Cats and dogs data, I have created PetResources.js file under the services folder. This will wait for 1 second before returning the data. Another place where I am using service is when user submit the "Plan a vist" form, it calls the service "ScheduleResource.js" which stores the apointment data in global variable. This data is used by /upcoming-schedules page to show the upcoming schedules. 

## Pages
### Navigation pages
#### About
This is the home page and can be reached by click on "About" menu in Navigation bar.
It has menus and submenus and has transformation.
It has complex carousel UI with 4 different views in it that slides to next using transformation.
I have created CSS grid of 3 cards, each going to New Adopters checklist, Covid-19 Resources, and Adoption FAQ.

#### Cats and Dogs
This is the page where I am showing the residential and adoptable Cats and Dogs in CSS grids. The page has interesting facts about adoptable cats and dogs. The interesting facts are present for the adoptable category of pets and you can view them by clicking on "Read more". The data is fetched by calling PetResource service to get the data and show it in the UI. While fetching, it shows a loading spinner which has animation in it.

#### Adoption FAQ
This page shows the common FAQ questions asked. It has a list of accordion in two sets General and Fostering which shows questions and expanding them shows the answers.

#### Plan a visit
This page has the form to schedule an apointment. The fields indicate if they are required or not by the red astrick symbol after the field. The form shows error after the field is touched or the submit it clicked. The Form also changes the field based on the dropdown selection. Once the form is subnitted, it calls a fake service to include the apointment details in the list of apointment and redirects users to /upcoming-schedule page that shows their current apointment. You may cancel the apointment using this page. 

### Other pages

#### New Adopters Checklist
This page can be reached by clicking the first image of the carousel or by clicking on first CSS grid card. 

#### Special Events 
These pages have information regarding upcoming special events like "Yoga with Cats", "5k dog run" and "Petmas celebration". You can reach these pages by clicking on Carousel panels. 

#### Covid Resource page
This page contains information related to covid19 precautions that the cafe is taking. It can be reached by clicking one of the Card in the About page (home page) or by directly going to /covid.

#### Upcoming schedule page
This page can be reached by submitting the "Plan a visit" form. It can also be reached by /upcoming-schedules. The form is storing user values in application state.

#### Privacy
Shows the privacy policy as well as mention where each photo is taken from. This can be found in the footer section with the link.

## Accessibility
- Skip Link added
- Added alt text is all the images to show description of the image to the narator.
- Labels and fields are conected by htmlfor.
- Added aria-label and region in Carousel
- Added role=status in loading indicator
- Added aria-label, aria-expanded, role and region in Accordion
- General accessibility and WCAG level AA color contrast checked

## Image used and Licence terms

This website has various collections of cats and dogs and its pictures are taken from various legal resources like shutterstock.com, Unsplash images. All the images used in this website are legal to use.

ShutterStock Images
Term: IF YOU PURCHASE A "TEAM SUBSCRIPTION" THE RIGHT TO LICENSE, DOWNLOAD AND USE CONTENT IS LIMITED TO THE NUMBER OF USERS PERMITTED BY THAT TEAM SUBSCRIPTION. SHUTTERSTOCK’S "PREMIER PLATFORM" GRANTS ACCESS AND USAGE RIGHTS TO UNLIMITED USERS AMONG OTHER ADDITIONAL RIGHTS.

https://www.shutterstock.com/license

Images downloaded from ShutterStock: adopt-me.jpg, carausel1.jpg, carausel2.jpg, carausel4.jpg, cat-yoga.jpg, petmas.jpg, petmas1.jpg

These images from shutterstock are paid images and I have purchased them. As per their policy, if I have purchased, I can legally use it for any purpose.

Unsplash Images
Unsplash grants you an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use photos from Unsplash for free, including for commercial purposes, without permission from or attributing the photographer or Unsplash. This license does not include the right to compile photos from Unsplash to replicate a similar or competing service.

https://unsplash.com/license

Images downloaded from Unsplashed: carausel3.jpg, cat-adopt1.jpg, cat1.jpg, dog1.jpg, dog2.jpg, dog3.jpg, dog4.jpg, dogrun.jpg, dream-cat.jpg, golden retriever.jpg, hide-cat.jpg, huskypuppy.jpg, huskypuppy.jpg, kitchen-cat.jpg, mission.jpg, muchkin-window.jpg, pomeranian.jpg, pug.jpg, ragdoll-cat.jpg

Pexel Images
Pexels license: We tried to keep the Pexels License as simple as possible. Keep reading to find out more. All photos and videos on Pexels are free to use. Attribution is not required. Giving credit to the photographer or Pexels is not necessary but always appreciated. You can modify the photos and videos from Pexels. Be creative and edit them as you like.

https://www.pexels.com/license/

Images downloaded from Pexels: checklist.jpg, faq1.jpg, cat2-image.jpg, cat1-image.jpg, cat-form.png, catyoga2.jpg