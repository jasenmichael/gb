# Greenbriar Community Website
## greenbriarschool.org

uses: vue, nuxt, mdbootstrap, eventbright, and netlify

based on https://github.com/jasenmichael/nuxt-eventbright-starter




todo:
 - implement Home School Enrichment Program page with schedule(google calendar)
 - edit about to include more history(with old images), move home school section above and seperate from worksops/events
 - fix events empty(refactor events), when not loaded through spa
   - reconstruct(remove not needed fields) events list response stored in the store.
   - remove events.list, and replace with event.live and events.completed.
   - move axios.get to netlify functions

 - move send email to netlify function
   - add a .env key validation netify & email-endpiont
   -  