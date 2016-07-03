# Angular 2 and Redux Tutorial: Contact List

<img src = "contact-list.gif" width = 800>

:clipboard: A simple contact list application built with Angular 2, Immutable.js and Redux. This is the source code for my [blog post](http://houssein.me/redux/immutablejs/angular2/2016/07/02/angular2-with-immutablejs-and-redux.html) where I explain how I build this application step by step.

<!-- ##How it Works

Once a Slash Command is set up in your configurations, issuing the <b>/djkhaled</b> command will send the data to the Node instance URL. The command is then validated by confiriming the token received from Slack. Once that's done, [cheerio](https://github.com/cheeriojs/cheerio) is used to web scrape Bing Image Search to obtain the top image result which is sent back to the Slack channel via an Incoming Webhook.

<br>
<img src = "AnotherOne.png" width = 800>

##Getting Started

1. Configure your [Slack Integrations](http://slack.com/integrations)
    1. Create a new Slash Command
      * Name the command <b>/djkhaled</b>
      * Set the URL to be <b>http://yourhostname/blessup</b>
      * Method should be POST
    2. Create an Inbound Webhook. Every message from DJ Khaled will come via this webhook.
      * From the "Integration Settings"
          * Set the default channel you'd like (doesn't really matter, DJ Khaled will post to the public channel you're on)
          * Set the bot name (DJ Khaled, can be changed in the config file)
          * Set the default bot avatar (a nice DJ Khaled faceshot will be perfect)
2. Update config.js in your project
    1. <b>slack\_webhook\_url</b> : must match the "Webhook URL" setting found in your Incoming Webhook configuration
    2. <b>slack\_token</b> : should match the "Token" value found in your Slash Command configuration
    3. <b>port</b>: should match your desired port

##Major Key Alert

Run in your terminal:

    node blessup.js

In your browser, visit:

    http://localhost:8081/blessup

<b>Note:</b> Slack requires a secure public URL so if you're running on a localhost for testing purposes, you may have to use a tool like [ngrok](http://ngrok.com) to tunnel requests with a public hostname. -->