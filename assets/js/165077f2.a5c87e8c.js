(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,b=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?o.a.createElement(b,i(i({ref:t},c),{},{components:n})):o.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(111)),l={id:"flashSwap",title:"Flash Loan",sidebar_label:"Flash Loan"},i={unversionedId:"flashSwap",id:"flashSwap",isDocsHomePage:!1,title:"Flash Loan",description:"What is Flash Loan",source:"@site/docs/flashSwap.md",slug:"/flashSwap",permalink:"/docs/docs/flashSwap",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/flashSwap.md",version:"current",sidebar_label:"Flash Loan",sidebar:"someSidebar",previous:{title:"Liquidity Mining Contract Interface Description",permalink:"/docs/docs/mining"},next:{title:"Deployment Information",permalink:"/docs/docs/deployedInfo"}},s=[{value:"What is Flash Loan",id:"what-is-flash-loan",children:[]},{value:"How Does Flash Loan Work",id:"how-does-flash-loan-work",children:[]},{value:"How to use DODO Flash Loan",id:"how-to-use-dodo-flash-loan",children:[]},{value:"Some Thoughts on Flash Loan",id:"some-thoughts-on-flash-loan",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-is-flash-loan"},"What is Flash Loan"),Object(r.b)("p",null,"Simply put, you are allowed to pay on credit on DODO! When you buy tokens DODO, you can first get the tokens you want to buy, do anything you want with the tokens, and pay for them later."),Object(r.b)("h2",{id:"how-does-flash-loan-work"},"How Does Flash Loan Work"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://dodoex.github.io/docs/img/dodo_flash_swap_v2.png",alt:null})),Object(r.b)("p",null,"The figure above illustrates the four steps in a flash swap happening under the hood"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Call the ",Object(r.b)("inlineCode",{parentName:"li"},"flashLoan")," function from the smart contract"),Object(r.b)("li",{parentName:"ol"},"Pool transfers the base tokens and quote tokens to the message sender (baseAmount or quoteAmount can equals to zero)"),Object(r.b)("li",{parentName:"ol"},"If the parameter ",Object(r.b)("inlineCode",{parentName:"li"},"data")," of the ",Object(r.b)("inlineCode",{parentName:"li"},"flashLoan")," function call is not null, the pool contract will call the ",Object(r.b)("inlineCode",{parentName:"li"},"DVMFlashLoanCall")," or ",Object(r.b)("inlineCode",{parentName:"li"},"DPPFlashLoanCall")," method."),Object(r.b)("li",{parentName:"ol"},"After the ",Object(r.b)("inlineCode",{parentName:"li"},"DVMFlashLoanCall")," or ",Object(r.b)("inlineCode",{parentName:"li"},"DPPFlashLoanCall")," is executed, the contract will calculate whether the pool is losing money, if it loses, the transaction will fail directly.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"    function flashLoan(\n        uint256 baseAmount,\n        uint256 quoteAmount,\n        address assetTo,\n        bytes calldata data\n    ) external;\n")),Object(r.b)("p",null,"ps: DODO V2 flashLoan will preview a transaction that equalize the base and quote token to the initial state. using the preview transaction fee as the flashloan fee. No more fee will be charged in other situations."),Object(r.b)("p",null,"Requires users implement the ",Object(r.b)("inlineCode",{parentName:"p"},"IDODOCallee")," interface."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"interface IDODOCallee {\n    function DVMSellShareCall(\n        address payable assetTo,\n        uint256,\n        uint256 baseAmount,\n        uint256 quoteAmount,\n        bytes calldata\n    ) external;\n\n    function DPPFlashLoanCall(\n        address sender,\n        uint256 baseAmount,\n        uint256 quoteAmount,\n        bytes calldata data\n    ) external;\n}\n")),Object(r.b)("h2",{id:"how-to-use-dodo-flash-loan"},"How to use DODO Flash Loan"),Object(r.b)("p",null,"Code sample: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/DODOEX/dodo-example/blob/main/contracts/DODOFlashloan.sol"},"DODOFlashloan.sol")),Object(r.b)("h2",{id:"some-thoughts-on-flash-loan"},"Some Thoughts on Flash Loan"),Object(r.b)("p",null,"Once you have a deep understanding of flash swap, you will realize the superiority of the DeFi world over the centralized world. The composability of smart contracts has elevated the fund utilization of DeFi to an unprecedented level. Thanks to trustlessness, the cost of credit in DeFi is incredibly low. Once this financial system is integrated into the real world, its potential for improving our society and productivity will be truly boundless. The DODO team hopes that flash swap serves as a primer for DeFi builders and beginners alike to gain an appreciation for the power of DeFi."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Flash swap was inspired by ",Object(r.b)("a",{parentName:"p",href:"https://dydx.exchange/"},"dYdX")," and ",Object(r.b)("a",{parentName:"p",href:"https://uniswap.org/docs/v2/core-concepts/flash-swaps"},"Uniswap"),". The DODO team genuinely appreciates and admires what these DeFi pioneers have done before us \ud83d\udc4d"))))}p.isMDXComponent=!0}}]);