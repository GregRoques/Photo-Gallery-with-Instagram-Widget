# Instagram Widget

## About

This is an Instagram Widget I created for my "/media" and "/photography" paths on my website. You can see a demo of how it works by clicking on the video link below.

I have it set up so that the backend does a call to the Instagram API every 6 hours and stores the data; this way I do not need to call Instagram every time someone visits a page containing the widget. Not only does this reduce the number of calls to Instagram, it also allows the system to manipulate and store the data before it is needed, saving load time for my site visitors. This seems like a general best practice for these kind of third party apis (including Google Photos, which can also be used with this widget with some minor changes), and is how many sites like Wix.com and WordPress build their Instagram widgets. 

Note that I did not used the Instragram graph-api, as this would require my app going through an approval process; as this is a personal app for a single, low-traffic personal webpage, I most certainly would not get the time of day from Instagram (aka, Facebook for Developers) for an approval. Instead, I simply grabbed a Long Term Token (good for 60 days) from their Test-User Instance. The downside of this is I cannot renew my token via an automated call to the Insta-API once it expires. My solution to ensure un-interupted display of my widget was to program a nodemailer-js email to fire off when it is nearing time (or is time) for a renewal. 

I stored my Instagram token, the date the token was issued in numeric-time format, and my Insta username on my database's "user info" page. I created a site allowing me to login and update my blog and make updates to my site (see "Portfolio-Publisher" folder), and used this to update my Insta data in my database as needed. If you choose to use this widget, you will want to do something similar; you can see where I called my database for this info on my Back-End Route.

The reason I deactivated this app is because I no longer enjoy using Instagram. From Stories and Reels to vidoes, memes and IG-TV, the site hasn't been about photos for a long time; being a some-times photographer, that's all I cared about. Add in the interminable blitzkrieg of ads and "accounts you should follow" polluting your news-feed, and the site is now nothing but a nuisance.

Now that I got that off my chest, I also included the Instagram icon I used to feature in my footer on the paths mentioned in my beginning paragraph. This is just in case I ever choose to reactivate my Instagram account and decide to promote it on the media pages of my site again.

## Dependencies

### Front-End
- React
- Axios

### Back-End
- npm i express
- npm i axios
- npm i nodemailer
- npm i nodemailer-sendgrid-transport

## Video

[![demo video](../readMeImages/instaWidgetVideo.png)](https://youtu.be/A5r3KNxN-GY)