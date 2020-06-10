# Personal Portfolio Site 2.0

# Contents

* Description
* Technologies
* Challenges and Solutions
* MVP
* Stretch Goals
* Images

# Description
This site (www.GregRoques.com) is an updated version of my personal Portfolio page created using React and Redux. I chose to recreate my former site, built with vanilla JS and Bootstrap, to allow for cleaner content routing and more dyanmic animation rendering.

# Technologies
- React/Redux
- Node/Express
- HTML/CSS/JavaScript
- Google Firebase

### Packages
React/Router:
- npx create-react-app
- npm i react-router-dom

Redux w/ dev tools and middleware:
- npm i redux
- npm i react-redux
- npm i redux-devtools
- npm i redux-thunk

Backend for Instagram API calls
- npm i node
- npm i express
- npm i body-parser
- npm i cors
- npm i helmet

Axios calls and HTML parsing:
- npm i axios
- npm i react-html-parser

CSS in JS for homepage:
- npm i emotion

Google Analytics:
- npm i react-ga
- npm i history

# Challenges & Solutions
###   1. Home Page redirect animations:
This was tricky, as it required precise timing for the animations to minimize into the distance before calling the next route. To achieve this, I created a click listener that would call the function "pageHandler". I implemented npm framework "Emotions" to create unique CSS styling classes or the fade out animations. Finally, I used a "setTimeOut" at the conclusion of the function that would update state to call the redirect at the exact second the animation transition for the clicked circle was complete.


```
state = {
        thisCategory: '/',
        nextPage: false,
        redirect: false    
    }

    pageHandler = nextPage => {

        const stateObj = {
            nextRoute: nextPage,
            nextPage: true,
        }

        pages.forEach(page => {
            let lowerCase = page.toLowerCase()
            if (lowerCase === nextPage) {
                stateObj[`${lowerCase}Class`] = scalingClass
            } else {
                stateObj[`${lowerCase}Class`] = disappearingClass
            }
        })

        this.setState(stateObj)

        setTimeout(() => {
            this.setState({redirect: true})
        }, 1000 * disappearTime)        
    }
```
```
render(){
        return(
            <div className="homeBody fadeIn">
            
                {this.state.redirect && <Redirect push to={`${this.state.nextRoute}`}/>}
                {pages.map((page, i)=>{
                    let className = this.state[`${page.toLowerCase()}Class`]
                    return (
                        <Circle 
                            key ={i}
                            handler={this.pageHandler}
                            className={className}
                            name={page}                            
                        />    
                    )
                }
                )}                
            </div>
        )
      
    }
```
```
import { css } from "emotion";

const disappearTime = 1;

const disappearingClass = css`
    opacity: 0;
    transition: ${disappearTime}s all;
`;

const scalingClass = css`
    transform: scale(0);
    transition: 0.75s all;
`;
```
###   2. Re-Render current page in header when changing routes:
In the upper left hand corner, I wanted the page name to update and dynamically appear as if it were being typed out. The page name is forwarded to the header component as a prop via the Redux Store. For the typing effect, used an animation that would slowly reveal the width from left to right over 3.5 seconds...this was the easy part.
```
    /* The typing effect */
    @keyframes typing {
    from { width: 0 }
    to { width: 100% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: rgb(35,64,143); }
    }
``` 
What was more tricky was getting the effect to re-render each time a new page is called. Initially, the page title would update without re-rendering the animation class. After much trial and error, I discovered that by calling an new, unique key when updating the prop name, the entire div would rerender, activating the className each time.
```
<div className ="rightNav">
    <div key={this.props.header} className="typeTitle">
        {`<!--`}{this.props.header}{`-->`}
    </div>
</div>
```

###   3. Loading routes at the top of each page:

When testing the site, I noticed that if I called a new route from a link on the bottom of the preceding page, it would update the new route to the exact location at which I was previously scrolled down to. This was super annoying! Luckily, there was a simple, one line solution to this problem. I simply added a condition to scroll to the top of the window within the "componentDidMount" for each page.
```
componentDidMount() {
    this.props.SetHeader("About");
    window.scrollTo(0, 0);
}
```

###   4. URL Route Refresh:

Once I deployed my site to AWS, I discovered that I could not load to specific pages on my website my typing in their routes appended to the URL, nor could I refresh a page from its route: if I attempted to do so, the browser would return a 404. This is because the React's routes are constructed for client-side, not server side, and thus the page's do not exist. To fix this, I created a .htaccess file in the html root directory containing my site's index.html file, containing the following line of code:
```
Options +SymLinksIfOwnerMatch 
RewriteEngine On 
RewriteCond %{REQUEST_FILENAME} !-f 
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

This alone did not do the trick, however. Next, I had to had to allow this folder to access my new htaccess document. To do this, I accessed my apache2.conf file via the terminal by using:
```
sudo vim /etc/apache2/apache2.conf
```
Next, I had to find the folder containing my index.html file (var/www) within the document, and change the "AllowOveride" command from "None" to "All":
```
<Directory /var/www/>
     Options Indexes FollowSymLinks
     AllowOverride None (change to ALL to allow .htaccess to work)
     Require all granted
</Directory>
```
Finally, I restarted my apache using the below terminal command and boom...my URL links were working!
```
$ sudo /etc/init.d/httpd restart 
```

 Now, the browser would recognize subpages on my website. This made navigating directly to, say, my portfolio by typing www.GregRoques.com/portfolio into the browser a nice shortcut, elinating the 404 error. However, what about routes that I had not created. Unfortunately, the above trick recognizes ALL subpages; thus, if you type in one that does not exist, you would render the Layout wrapper in App.js, but would not call any of its child routes, as seen below:

![No Link Page](public/readMeImages/noPageRender.png)

 The final fix was to add a Switch wrapper (imported from react-router-dom) in my app.js file to wrap around my routes, and then define a default for routes that don't exist. This route  calls a function that redirects (Redirect is also imported from react-router-dom) non-existing pages back to the homepage.

 ```
       <Router>
         <Layout >
           <Switch>
              <Route path="/" exact component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/editorial" component={Design}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/blog" component={Blog}/>
              <Route component ={this.NoPage}/>
           </Switch>
        </Layout>
      </Router>
 ```
 ```
   NoPage = () =>{
    return(
      <div>
          <Redirect push to={Home}/>
      </div>
    )
  }

 ```

# MVP
Launch new site with:
1) an about link, including a tertiary link to my graphic design and editorial work
2) deveopment portfolio link
3) Blog page updateable from a hidden login page; (Goolge) Firebase backend is updated via authenticated REST calls 
4) contact modal and links to Linked In, Github and a downloadabe copy of my resume

# Stretch Goals

1) Continually update blog with lessons learned and project updates regarding development and design projects I am working on and share via LinkedIn. 

# Demo Video
## Click image below to view video

[![demo video](public/readMeImages/playVideo.png)](https://youtu.be/gGkqwKJC9HU)

  
