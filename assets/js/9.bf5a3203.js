(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{209:function(t,e,a){"use strict";a.r(e);var i=a(0),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ai-explainability-360"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ai-explainability-360"}},[t._v("#")]),t._v(" AI Explainability 360")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Item")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Presented By")]),t._v(" "),a("td",[t._v("IBM Research")])]),t._v(" "),a("tr",[a("td",[t._v("FAT Reference")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://fatconference.org/2020/acceptedtuts.html#ai",target:"_blank",rel:"noopener noreferrer"}},[t._v("AI Explainability 360 Tutorial"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("Paper")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://dl.acm.org/doi/abs/10.1145/3351095.3375667",target:"_blank",rel:"noopener noreferrer"}},[t._v("AI explainability 360: hands-on tutorial"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("Microsite")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/IBM/AIX360/wiki/ACM-FAT*2020-Tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("AI Explainability 360 Tutorial"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("Github")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/IBM/AIX360",target:"_blank",rel:"noopener noreferrer"}},[t._v("IBM/AIX360"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("Website")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://aix360.mybluemix.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bluemix Demos"),a("OutboundLink")],1)])])])]),t._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),a("h3",{attrs:{id:"general-interpretability-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-interpretability-metrics"}},[t._v("#")]),t._v(" General Interpretability Metrics")]),t._v(" "),a("ul",[a("li",[t._v("Maximum mean discrepancy critic")]),t._v(" "),a("li",[t._v("Saliency maps\n"),a("ul",[a("li",[t._v("Image explainability")]),t._v(" "),a("li",[t._v("Aims to highlight the objects that determined the classification")]),t._v(" "),a("li",[t._v("Works by identifying how much the classification changes based on different components in the image")])])]),t._v(" "),a("li",[t._v("Knowledge Distilation")])]),t._v(" "),a("h3",{attrs:{id:"ai-360-intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ai-360-intro"}},[t._v("#")]),t._v(" AI 360 Intro")]),t._v(" "),a("ul",[a("li",[t._v("Developed by IBM")]),t._v(" "),a("li",[t._v("Developed a taxonomy that can be explored to identify the most appropriate technique\n"),a("ul",[a("li",[t._v("(add photo/slide of the taxonomy)")])])]),t._v(" "),a("li",[t._v("Types:\n"),a("ul",[a("li",[a("em",[t._v("post-hoc")]),t._v(": explain each point/observation etc")]),t._v(" "),a("li",[a("em",[t._v("self-explaining")]),t._v(": The model to derive the explanations might not be explainable")])])]),t._v(" "),a("li",[t._v("Key idea of the approach is to provide insight to the various people that interact with a model & it's outputs & aligns with their knowledge & skillset\n"),a("ul",[a("li",[t._v("Data Scientist Persona:\n"),a("ul",[a("li",[t._v("Potential Explanation Type: Interpretable models, eg rule-based")]),t._v(" "),a("li",[t._v("Focused on understanding the in's & out's of the model, it's accuracy & how it works")])])]),t._v(" "),a("li",[t._v("Business User Persona:\n"),a("ul",[a("li",[t._v("Potential Explanation Type: ProtoDash")]),t._v(" "),a("li",[t._v("Aiming to build trust by comparing with historical data/cases")])])]),t._v(" "),a("li",[t._v("Customer Persona:\n"),a("ul",[a("li",[t._v("Potential Explanation Type: Contrastive Explanation (CEN)")]),t._v(" "),a("li",[t._v("Highlight areas that directed the decision &/or areas they could change to alter the decision")])])])])])]),t._v(" "),a("h3",{attrs:{id:"package-walkthrough"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-walkthrough"}},[t._v("#")]),t._v(" Package Walkthrough")]),t._v(" "),a("p",[a("strong",[t._v("Use-case")]),t._v(": "),a("em",[t._v("whether or not a financial institute should offer a loan to a loan applicant")])]),t._v(" "),a("p",[t._v("The demo is available online but behind a login.")]),t._v(" "),a("ul",[a("li",[t._v("Alogorithm Proto-Dash:\n"),a("ul",[a("li",[t._v("Retrieves/identifies similar observations (aka "),a("code",[t._v("prototypes")]),t._v(") to the one of interest\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.ibm.com/blogs/research/2019/10/learning-implicit-generative-models/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maximum mean discrepency"),a("OutboundLink")],1),t._v(" used as the similarity metric")]),t._v(" "),a("li",[t._v("Highlights the most similar items")])])])])])]),t._v(" "),a("p",[t._v("Not all algoirthms are available yet in the package. Some of the handling for categorical variables are currently closed source but the accompanying papers should be available.")]),t._v(" "),a("h3",{attrs:{id:"heloc-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heloc-demo"}},[t._v("#")]),t._v(" HELOC Demo")]),t._v(" "),a("p",[t._v("Walk-through available at: "),a("a",{attrs:{href:"https://nbviewer.jupyter.org/github/IBM/AIX360/blob/master/examples/tutorials/HELOC.ipynb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Credit Approval Tutorial"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("em",[t._v("NOTE: In order to run the demo the data is required from FICO & requires submitting an access request")])]),t._v(" "),a("h4",{attrs:{id:"comments-on-the-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comments-on-the-library"}},[t._v("#")]),t._v(" Comments on the library")]),t._v(" "),a("ul",[a("li",[t._v("Supports both continuous & categorical features (as well as combinations of both)\n"),a("ul",[a("li",[t._v("Eg a continuous feature plus a binned version")])])]),t._v(" "),a("li",[t._v("Supports a custom method for binarising data prior to analysis\n"),a("ul",[a("li",[a("code",[t._v("FeatureBinarizer")]),t._v(" to manage this with options such as bin size")])])]),t._v(" "),a("li",[t._v("LRR: Logistic Rule Regression\n"),a("ul",[a("li",[t._v("Generates a GAM")])])]),t._v(" "),a("li")])])}),[],!1,null,null,null);e.default=r.exports}}]);