# Personal Portfolio Site 2.0

# Contents

* Description
* Technologies
* Challenges and Solutions
* MVP
* Stretch Goals

# Description
This site (www.GregRoques.com) is an updated version of my personal Portfolio page created using React and Redux. I chose to recreate my former site, built with vanilla JS and Bootstrap, to allow for cleaner content routing and more dyanmic animation rendering.


# Technologies
- React/Redux
- HTML/CSS/JavaScript


# Challenges & Solutions
##   1. Home Page redirect animations:
This was very tricky, as it required precise timing for the animations to minimize into the distance before calling the next route. To achieve this, I created a click listener that would call the function "pageHandler". I implemented npm framework "Emotions" to create unique CSS styling classes or the fade out animations. Finally, I used a "setTimeOut" at the conclusion of the function that would update state to call the redirect at the exact second the animation transition for the clicked circle was complete.


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
##   2. Re-Render current page in header when changing routes:
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

##   3. Loading routes at the top of each page:

When testing the site, I noticed that if I called a new route from a link on the bottom of the preceding page, it would update the new route to the exact location at which I was previously scrolled down to. This was super annoying! Luckily, there was a simple, one line solution to this problem. I simply added a condition to scroll to the top of the window within the "componentDidMount" for each page.
```
componentDidMount() {
    this.props.SetHeader("About");
    window.scrollTo(0, 0);
}
```

 

# MVP
Launch new site with:
1) an about link, including a tertiary link to my graphic design and editorial work
2) deveopment portfolio link
3) Updatable blog page
4) contact modal and links to Linked In, Github and a downloadabe copy of my resume


# Stretch Goals

Continually update blog with lessons learned and project updates regarding development and design projects I am working on. 

# Screenshots



  