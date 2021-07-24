(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{111:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,m=d["".concat(l,".").concat(u)]||d[u]||s[u]||o;return a?n.a.createElement(m,i(i({ref:t},b),{},{components:a})):n.a.createElement(m,i({ref:t},b))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<o;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),o=(a(0),a(111)),l={id:"tradeApi",title:"DODO Trade API",sidebar_label:"DODO Trade API"},i={unversionedId:"tradeApi",id:"tradeApi",isDocsHomePage:!1,title:"DODO Trade API",description:"Introduction",source:"@site/docs/tradeApi.md",slug:"/tradeApi",permalink:"/docs/jp/docs/tradeApi",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/tradeApi.md",version:"current",sidebar_label:"DODO Trade API",sidebar:"someSidebar",previous:{title:"DODO Crowdpooling Whitelist Configuration",permalink:"/docs/jp/docs/cpwl"},next:{title:"Dashbord statistical rule description",permalink:"/docs/jp/docs/businessDataDashbord"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"URL",id:"url",children:[]},{value:"Request",id:"request",children:[{value:"method",id:"method",children:[]},{value:"Request params",id:"request-params",children:[]}]},{value:"Response params",id:"response-params",children:[{value:"JSON Example",id:"json-example",children:[]},{value:"Response params",id:"response-params-1",children:[]}]},{value:"Integrate with Smart Contract",id:"integrate-with-smart-contract",children:[]}],b={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"The DODO Trade API currently provides real-time price quotes for swaps between arbitrary tokens on Ethereum Mainnet, Binance Smart Chain (BSC), Polygon, and Huobi ECO Chain (HECO Chain), as well as Application Binary Interface (ABI) data that can be used to interact with smart contracts on these networks. "),Object(o.b)("p",null,"Smart contract developers can easily incorporate the DODO Trade API into their platforms to implement their own trading features, thanks to the API\u2019s plug-and-play integration process. The DODO Trade API finds and compares prices for any pair of token assets from a variety of liquidity sources, including DODO v1, DODO v2, 1inch API, 0xAPI, ParaSwapAPI, professional market makers, and via DODO\u2019s custom aggregation algorithm."),Object(o.b)("p",null,"The full list of liquidity sources that the DODO Trade API currently uses from are as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ethereum Mainnet: DODO v1, DODO v2, ",Object(o.b)("a",{parentName:"p",href:"https://docs.1inch.io/api/"},"1inch API"),", ",Object(o.b)("a",{parentName:"p",href:"https://0x.org/"},"0x API"),", ",Object(o.b)("a",{parentName:"p",href:"https://developers.paraswap.network/"},"ParaSwap API"),", ",Object(o.b)("a",{parentName:"p",href:"https://onebitquant.com/"},"OneBit"),", and DODO\u2018s custom aggregation algorithm ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"BSC: DODO v1, DODO v2, ",Object(o.b)("a",{parentName:"p",href:"https://docs.1inch.io/api/"},"1inch API"),", ",Object(o.b)("a",{parentName:"p",href:"https://0x.org/"},"0x API"),", ",Object(o.b)("a",{parentName:"p",href:"https://developers.paraswap.network/"},"ParaSwap API"),", ",Object(o.b)("a",{parentName:"p",href:"https://woo.network/"},"Wootrade"),", and DODO\u2018s custom aggregation algorithm")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"HECO: DODO v1, DODO v2, and DODO\u2018s custom aggregation algorithm ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Polygon: DODO v1, DODO v2, ",Object(o.b)("a",{parentName:"p",href:"https://docs.1inch.io/api/"},"1inch API"),", ",Object(o.b)("a",{parentName:"p",href:"https://0x.org/"},"0x API"),", ",Object(o.b)("a",{parentName:"p",href:"https://developers.paraswap.network/"},"ParaSwap API"),", and DODO\u2018s custom aggregation algorithm "))),Object(o.b)("h2",{id:"url"},"URL"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://dodo-route.dodoex.io/dodoapi/getdodoroute"},"https://dodo-route.dodoex.io/dodoapi/getdodoroute")),Object(o.b)("h2",{id:"request"},"Request"),Object(o.b)("h3",{id:"method"},"method"),Object(o.b)("p",null,"GET"),Object(o.b)("h3",{id:"request-params"},"Request params"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Param"),Object(o.b)("th",{parentName:"tr",align:null},"type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"fromTokenAddress"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  contract address of a token to sell ",Object(o.b)("em",{parentName:"td"},"ETH(BNB or HT)  0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"fromTokenDecimals"),Object(o.b)("td",{parentName:"tr",align:null},"integer"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  Decimals of a token to sell")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"toTokenAddress"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  contract address of a token to buy ",Object(o.b)("em",{parentName:"td"},"ETH(BNB or HT)  0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"toTokenDecimals"),Object(o.b)("td",{parentName:"tr",align:null},"integer"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  Decimals of a token to buy")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"fromAmount"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  amount of a token to sell  NOTE\uff1acalculated with decimals\uff0cFor example 1ETH =  10**18")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"slippage"),Object(o.b)("td",{parentName:"tr",align:null},"integer"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  0 - 100   ",Object(o.b)("em",{parentName:"td"},"unit:%"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"userAddr"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  user address")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"chainId"),Object(o.b)("td",{parentName:"tr",align:null},"integer"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  1 represents ethereum, 56 represents BSC, 128 represents HECO, 137 represents Polygon")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"rpc"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"(required)  your own rpc node, you can set this parameter to point to it.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"deadLine"),Object(o.b)("td",{parentName:"tr",align:null},"integer"),Object(o.b)("td",{parentName:"tr",align:null},"(optional)  the timestamp of the block where the trade deadline is set to, unit: second")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"source"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},'(optional)  If left blank, the API automatically quotes prices from all liquidity sources. If source is set to "dodo", then the API quotes prices from DODO v1 and DODO v2 only.')))),Object(o.b)("h2",{id:"response-params"},"Response params"),Object(o.b)("h3",{id:"json-example"},"JSON Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n    "status": 200,\n    "data": {\n        "resAmount": 4131.964781,\n        "resPricePerToToken": 0.24201566131747518,\n        "resPricePerFromToken": 4.131964,\n        "priceImpact": 0,\n        "useSource": "0x",\n        "targetDecimals": 6,\n        "targetApproveAddr": "0xCB859eA579b28e02B87A1FDE08d087ab9dbE5149",\n        "to": "0xa356867fDCEa8e71AEaF87805808803806231FdC",\n        "data": "",\n        "resCostGas": 0\n    }\n}\n\n')),Object(o.b)("h3",{id:"response-params-1"},"Response params"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Param"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"resAmount"),Object(o.b)("td",{parentName:"tr",align:null},"Receive Amount (Not include Token's Decimals)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"resPricePerToToken"),Object(o.b)("td",{parentName:"tr",align:null},"ratio of sell Token Amount/ buy Token Amount")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"resPricePerFromToken"),Object(o.b)("td",{parentName:"tr",align:null},"ratio of buy Token Amount / sell Token Amount")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"priceImpact"),Object(o.b)("td",{parentName:"tr",align:null},"Price deviation; convert to percentage by multiplying by 100. High price deviation is caused by low liquidity in the pools where the prices are quoted from.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"targetApproveAddr"),Object(o.b)("td",{parentName:"tr",align:null},"User need give sell Token's authority to this contract (DODOApprove) before swaping. if sell Token equals to ETH (BNB or HT). the param will be empty.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"to"),Object(o.b)("td",{parentName:"tr",align:null},"DODOProxy's address")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"data"),Object(o.b)("td",{parentName:"tr",align:null},"ABI Data\uff0cUse directly")))),Object(o.b)("h2",{id:"integrate-with-smart-contract"},"Integrate with Smart Contract"),Object(o.b)("p",null,"The data obtained from DODO-API can be sent directly to DODOProxy contract. But if you want to use your own contract to encapsulate and send the data, you can refer to the following code sample: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/DODOEX/dodo-example/blob/main/contracts/DODOApiEncapsulation.sol"},"DODOApiEncapsulation.sol")))}p.isMDXComponent=!0}}]);