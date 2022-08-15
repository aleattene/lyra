"use strict";(self.webpackChunklyra=self.webpackChunklyra||[]).push([[40],{7522:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(9901);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,u=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(u,o(o({ref:t},h),{},{components:r})):n.createElement(u,o({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6931:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>h,assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(2875),a=(r(9901),r(7522));const i={sidebar_position:3},o="Search Data",l={unversionedId:"usage/search-data",id:"usage/search-data",title:"Search Data",description:"With the current version of Lyra, only type string properties are searchable, however this does not prevent the adding of different types of properties.",source:"@site/docs/usage/search-data.md",sourceDirName:"usage",slug:"/usage/search-data",permalink:"/lyra/docs/usage/search-data",draft:!1,editUrl:"https://github.com/nearform/lyra/edit/main/packages/docs/docs/usage/search-data.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Insert Data",permalink:"/lyra/docs/usage/insert-data"},next:{title:"Delete Data",permalink:"/lyra/docs/usage/deletion"}},s={},p=[{value:"Search",id:"search",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Filters",id:"filters",level:2},{value:'<Highlight color="#ff5b9b">Term</Highlight>',id:"term",level:3},{value:'<Highlight color="#ff5b9b">Properties</Highlight>',id:"properties",level:3},{value:'<Highlight color="#ff5b9b">Exact</Highlight>',id:"exact",level:3},{value:'<Highlight color="#ff5b9b">Tolerance</Highlight>',id:"tolerance",level:3},{value:'<Highlight color="#ff5b9b">Limit</Highlight>',id:"limit",level:3},{value:'<Highlight color="#ff5b9b">Offset</Highlight>',id:"offset",level:3},{value:'<Highlight color="#ff5b9b">Defaults</Highlight>',id:"defaults",level:3},{value:"What does the <code>search</code> method return?",id:"what-does-the-search-method-return",level:2},{value:"Elapsed",id:"elapsed",level:3},{value:"Hits",id:"hits",level:3},{value:"Count",id:"count",level:3}],h=e=>{let{children:t,color:r}=e;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"8px",color:"#fff",padding:"10px",cursor:"pointer"}},t)},c={toc:p,Highlight:h};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"search-data"},"Search Data"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"With the current version of Lyra, only type ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," properties are searchable, however this does not prevent the adding of different types of properties.\nLyra will keep them in memory and send the entire document back whenever there's a match for a query on searchable properties.")),(0,a.kt)("h2",{id:"search"},"Search"),(0,a.kt)("p",null,"Let's say we have a database that contains some elements:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lyra.js"',title:'"lyra.js"'},"import { create, insert, search } from '@nearform/lyra'; \n\nconst movieDB = create({\n  schema: {\n    title: 'string',\n    director: 'string',\n    plot: 'string',\n    year: 'number',\n    isFavorite: 'boolean'\n  }\n});\n\nconst { id: thePrestige } = insert(movieDB, {\n  title: 'The prestige',\n  director: 'Christopher Nolan',\n  plot: 'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',\n  year: 2006,\n  isFavorite: true\n});\n\nconst { id: bigFish } = insert(movieDB, {\n  title: 'Big Fish',\n  director: 'Tim Burton',\n  plot: 'Will Bloom returns home to care for his dying father, who had a penchant for telling unbelievable stories. After he passes away, Will tries to find out if his tales were really true.',\n  year: 2004,\n  isFavorite: true\n});\n\nconst { id: harryPotter } = insert(movieDB, {\n  title: 'Harry Potter and the Philosopher\\'s Stone',\n  director: 'Chris Columbus',\n  plot: 'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.',\n  year: 2001,\n  isFavorite: false\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notice that we are also importing the ",(0,a.kt)("inlineCode",{parentName:"p"},"search")," method")),(0,a.kt)("br",null),(0,a.kt)("p",null,"We can now search for one (or multiple) document(s) as easily as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const searchResult = search(movieDB, {\n  term: 'Harry',\n  properties: '*'\n});\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"search"))," method takes two mandatory parameters:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the database in which the ",(0,a.kt)("strong",{parentName:"li"},"search")," should occur"),(0,a.kt)("li",{parentName:"ol"},"what has to be searched")),(0,a.kt)("h2",{id:"filters"},"Filters"),(0,a.kt)("p",null,"The object that defines our query, in this case ",(0,a.kt)("inlineCode",{parentName:"p"},"{term: 'Harry', properties: '*'}"),",\ncan be shaped, by setting additional properties (filters), to ",(0,a.kt)("strong",{parentName:"p"},'"tighten"')," or ",(0,a.kt)("strong",{parentName:"p"},'"loosen"')," our query."),(0,a.kt)("h3",{id:"term"},(0,a.kt)(h,{color:"#ff5b9b",mdxType:"Highlight"},"Term")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"term")," property specifies the ",(0,a.kt)("inlineCode",{parentName:"p"},"word")," to be searched."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lyra.js"',title:'"lyra.js"'},"const searchResult = search(movieDB, {\n  term: 'Chris',\n});\n")),(0,a.kt)("p",null,"We are searching for all the documents that contain the word ",(0,a.kt)("inlineCode",{parentName:"p"},"Chris"),"."),(0,a.kt)("h3",{id:"properties"},(0,a.kt)(h,{color:"#ff5b9b",mdxType:"Highlight"},"Properties")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"properties")," property defines in which property to run our query."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lyra.js"',title:'"lyra.js"'},"const searchResult = search(movieDB, {\n  term: 'Chris',\n  properties: ['director']\n});\n")),(0,a.kt)("p",null,"We are searching for all the documents that contain the word ",(0,a.kt)("inlineCode",{parentName:"p"},"Chris")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"director")," property."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Nested properties"),"We can also search through nested properties:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="nested-properties.js"',title:'"nested-properties.js"'},"const searchResult = search(movieDB, {\n  term: 'Chris',\n  properties: ['cast.director'],\n  offset: 1,\n});\n"))),(0,a.kt)("h3",{id:"exact"},(0,a.kt)(h,{color:"#ff5b9b",mdxType:"Highlight"},"Exact")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"exact")," property finds all the document with an exact match of the ",(0,a.kt)("inlineCode",{parentName:"p"},"term")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lyra.js"',title:'"lyra.js"'},"const searchResult = search(movieDB, {\n  term: 'Chris',\n  properties: ['director'],\n  exact: true,\n});\n")),(0,a.kt)("p",null,"We are searching for all the documents that contain ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"exactly"))," the word ",(0,a.kt)("inlineCode",{parentName:"p"},"Chris")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"director")," property."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Without the ",(0,a.kt)("inlineCode",{parentName:"p"},"exact")," property, for example, the term ",(0,a.kt)("inlineCode",{parentName:"p"},"Christopher Nolan")," would be returned as well, as it contains the word ",(0,a.kt)("inlineCode",{parentName:"p"},"Chris"),".")),(0,a.kt)("h3",{id:"tolerance"},(0,a.kt)(h,{color:"#ff5b9b",mdxType:"Highlight"},"Tolerance")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tolerance")," property allows to specify the maximum distance (following the levenshtein algorithm) between the term and the searchable property."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Levenshtein distance"),"The Levenshtein distance is a string metric for measuring the difference between two sequences. Informally, the Levenshtein distance between two words is the minimum number of single-character edits (insertions, deletions or substitutions) required to change one word into the other."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lyra.js"',title:'"lyra.js"'},"const searchResult = search(movieDB, {\n  term: 'Cris',\n  properties: ['director'],\n  tolerance: 1,\n});\n")),(0,a.kt)("p",null,"We are searching for all the documents that contain a term with an edit distance of ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"Chris"),") in the ",(0,a.kt)("inlineCode",{parentName:"p"},"director")," property."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Tolerance")," doesn't work together with the ",(0,a.kt)("inlineCode",{parentName:"p"},"exact")," parameter")),(0,a.kt)("h3",{id:"limit"},(0,a.kt)(h,{color:"#ff5b9b",mdxType:"Highlight"},"Limit")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"limit")," property limits the result at the specified number."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lyra.js"',title:'"lyra.js"'},"const searchResult = search(movieDB, {\n  term: 'Chris',\n  properties: ['director'],\n  limit: 1,\n});\n")),(0,a.kt)("p",null,"We are searching for the ",(0,a.kt)("inlineCode",{parentName:"p"},"first")," document that contains the term ",(0,a.kt)("inlineCode",{parentName:"p"},"Chris")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"director")," property."),(0,a.kt)("h3",{id:"offset"},(0,a.kt)(h,{color:"#ff5b9b",mdxType:"Highlight"},"Offset")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"offset")," property paginates the results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="lyra.js"',title:'"lyra.js"'},"const searchResult = search(movieDB, {\n  term: 'Chris',\n  properties: ['director'],\n  offset: 1,\n});\n")),(0,a.kt)("p",null,"We are searching for all the document that contain the term ",(0,a.kt)("inlineCode",{parentName:"p"},"Chris")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"director")," property, but returning the document at offset ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,a.kt)("h3",{id:"defaults"},(0,a.kt)(h,{color:"#ff5b9b",mdxType:"Highlight"},"Defaults")),(0,a.kt)("p",null,"By default, Lyra limits the search results to ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),", without any offset (so, ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," as offset value)."),(0,a.kt)("h2",{id:"what-does-the-search-method-return"},"What does the ",(0,a.kt)("inlineCode",{parentName:"h2"},"search")," method return?"),(0,a.kt)("p",null,"Now that we have learned how to perform ",(0,a.kt)("strong",{parentName:"p"},"searches")," on a Lyra database, we can briefly analyze the responde that Lyra gives us back."),(0,a.kt)("p",null,"Let's say we have ran the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const searchResult = search(movieDB, {\n  term: 'Cris',\n  properties: ['director'],\n  tolerance: 1\n});\n")),(0,a.kt)("p",null,"Whether the document was found or not, Lyra gives back an ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," with the following properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  elapsed: 103\n  hits: [\n    {\n      id: 'SXLYl5aURpbuNYr7fUlQI',\n      title: \"Harry Potter and the Philosopher's Stone\",\n      director: 'Chris Columbus',\n      plot: 'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.',\n      year: 2001,\n      isFavorite: false\n    }\n  ],\n  count: 1\n}\n")),(0,a.kt)("h3",{id:"elapsed"},"Elapsed"),(0,a.kt)("p",null,"The time it took for Lyra ",(0,a.kt)("strong",{parentName:"p"},"to find")," (or not) the documents."),(0,a.kt)("h3",{id:"hits"},"Hits"),(0,a.kt)("p",null,"An array of objects (or an empty array) that contains all the ",(0,a.kt)("strong",{parentName:"p"},"found documents"),"."),(0,a.kt)("h3",{id:"count"},"Count"),(0,a.kt)("p",null,"The number of documents that were ",(0,a.kt)("strong",{parentName:"p"},"found"),"."))}d.isMDXComponent=!0}}]);