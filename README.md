# My Personal Website
This is my personal website showcasing my projects and expanding upon my resume. It includes interactive features as well.

## Live Demo
**Link to project** [cecilionavarro.com](https://cecilionavarro.com)

## How It's Made:
**Tech Used**: HTML, CSS, JavaScript, Node, Express

The most useful feature is under `Interactive` has even helped our worship team by allowing for quick transposition to a song because of last minute changes. AI has not been able to transpose songs and deliver in the same format.

I wrote the algorithm from scratch in C++ this was then translated to JavaScript. It assigns each note in the scale a value on a hashmap and then is transposed using the distance like 2 half steps or -5 half steps.

## Optimizations:  
The UI for the transcribe feature was modified to go from the original C++ to a slider and toggle. This made for easy searching of the desired key instead of the slower guess and check.

## Lessons Learned
I learned how to access and set preferences to localStorage in making a dark mode.

Favicons are also heavily cached so I had to find and delete my favicon folder on my local machine which gave me a small issue when trying to switch it out.

## Getting Started
**Dependancies:** Express, Nodemon

On one terminal:
<pre>
npm run dev
</pre>

On a second terminal:
<pre>
browser-sync start --proxy "localhost:3000" --files "public/**/*.*, views/**/*.*, routes/**/*.js, server.js"
</pre>