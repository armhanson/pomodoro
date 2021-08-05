# pomodoro
Pomodoro Project

![Image of Pomodoro Timer]
(https://cdn.dribbble.com/users/427368/screenshots/11457916/artboard_53.jpg)

Context on the problem or assignment (what it is and why you're doing it)
The Pomodoro timer is intended to help the user moderate workflow with regular breaks interspersed throughout the day.
This was a project I completed in the Engineering immersion course with Thinkful to test and solidify my understanding of React.
The completed project has also become useful during my daily studies to benefit my learning style.
Updates are being made to the framework, intarctive functionality, and rendering which I hope will be deployed soon for anyone to see and use!

Research and resources:
 - w3schools: https://www.w3schools.com/js/js_timing.asp
 - MDN: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals
 - Bootstrap: https://getbootstrap.com/docs/5.0/components/buttons/
 - Big Sound Bank: https://bigsoundbank.com/UPLOAD/mp3/1482.mp3

Use and Application:
  This timer is designed to allow the user to set a time of their choosing between 5 & 60 minutes to focus on work,
  offset by a time between 1 & 15 minutes for break between work sessions. The idea is that regular, short breaks between focus times
  will improve the efficiency and enjoyment of work experienced by the user. I have implemented this strategy personally and have
  experienced greater clarity and, by proxy, better productivity in my workflow.


Features:

![Pomodor Timer Inteface](/src/media/Active_Screen_Shot.png)
Format: ![Alt Text](url)

  Currently, the user will be able to set a time for working between 5 & 60 minutes and a time for breaking between 1 & 15 minutes.
  The user has access to a play, pause and stop button. The pause button is only visible after play has been pressed and stop has not.
  At play, the timer will begin counting down from the set time and a progress bar will fill in conjunction with the progression of time.
  When work time reaches 0 seconds, a sound will play to signify that break time has begun. Break time will then commence from the set time
  and follow the same process as work time until the seconds reach 0 and another sound signifies that work will recommence.
  This process can be paused during a lunch break or otherwise. The countdown will continue while play is pressed,
  looping through work and break until the stop button is pressed and the timers are all reset to the user's desired times.


Technology and Tools:
  - Method: Mobile First Development
  - Languages: JavaScript ES6, HTML5, CSS3
  - Frameworks: React

Discoveries:
  useInterval is a function developed by the challenge authors to handle milisecond progression. This functionality enabled the switching
  between work and break times and reavealed an efficient method for handling time progression for projects in which I'll undoubtedly be involved.

Goals:
  This timer is currently being modified with imagery and animations to create a more dynamic interactive experience. The eventual deployment
  of these modifications has no set timeline as of now.
