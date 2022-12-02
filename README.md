# techblog_

## Description
 As a developer my goal is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Usage 
``express handlebars``
 ``MYSQL2``
``Sequalize packages`` 
``.env package``
``bycript package`` 
``express sessions``

## Demo

![Untitled_ Dec 2, 2022 3_01 PM](https://user-images.githubusercontent.com/112473624/205404642-0c20962c-9c97-416c-a69e-66e1cf4cac5b.gif)

## Code snippet:
``<div class="item mb-5 pb-5 border-bottom item-loop">
				    <div class="row g-3 g-xl-0">
					    <div class="col">
						    <h3 class="title mb-1"><a class="text-link" href="/posts/{{id}}">{{name}}</a></h3>
						    <div class="meta mb-1 extrainfo">
                  <span class="date"><span class="date-title">Published on</span> {{{format_date date_created}}} 
                  <span class="date-title">by</span>
                  </span>
                  <span class="time">{{user.name}}</span>
                </div>
						    <div class="intro">{{trimString description 0 200}}</div>
						    <a class="text-link d-block mt-3" href="/posts/{{id}}">Read more &rarr;</a>
					    </div><!--//col-->
				    </div><!--//row-->
			    </div><!--//item-->``
          
