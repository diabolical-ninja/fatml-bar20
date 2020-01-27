(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{209:function(e,t,a){"use strict";a.r(t);var i=a(0),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ai-explainability-360"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ai-explainability-360"}},[e._v("#")]),e._v(" AI Explainability 360")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Item")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Presented By")]),e._v(" "),a("td",[e._v("IBM Research")])]),e._v(" "),a("tr",[a("td",[e._v("FAT Reference")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://fatconference.org/2020/acceptedtuts.html#ai",target:"_blank",rel:"noopener noreferrer"}},[e._v("AI Explainability 360 Tutorial"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("Paper")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://dl.acm.org/doi/abs/10.1145/3351095.3375667",target:"_blank",rel:"noopener noreferrer"}},[e._v("AI explainability 360: hands-on tutorial"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("Microsite")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/IBM/AIX360/wiki/ACM-FAT*2020-Tutorial",target:"_blank",rel:"noopener noreferrer"}},[e._v("AI Explainability 360 Tutorial"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("Github")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/IBM/AIX360",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM/AIX360"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("Website")]),e._v(" "),a("td",[a("a",{attrs:{href:"http://aix360.mybluemix.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bluemix Demos"),a("OutboundLink")],1)])])])]),e._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("h3",{attrs:{id:"general-interpretability-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-interpretability-metrics"}},[e._v("#")]),e._v(" General Interpretability Metrics")]),e._v(" "),a("ul",[a("li",[e._v("Maximum mean discrepancy critic")]),e._v(" "),a("li",[e._v("Saliency maps\n"),a("ul",[a("li",[e._v("Image explainability")]),e._v(" "),a("li",[e._v("Aims to highlight the objects that determined the classification")]),e._v(" "),a("li",[e._v("Works by identifying how much the classification changes based on different components in the image")])])]),e._v(" "),a("li",[e._v("Knowledge Distilation")])]),e._v(" "),a("h3",{attrs:{id:"ai-360-intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ai-360-intro"}},[e._v("#")]),e._v(" AI 360 Intro")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Developed by IBM")]),e._v(" "),a("ul",[a("li",[e._v('As such some of the functionality is available open source but in order to create a "value proposition" many useful features are excluded & only available for purchase, eg categorical variables, feature filtering for counterfactuals, etc')])])]),e._v(" "),a("li",[a("p",[e._v("Developed a taxonomy that can be explored to identify the most appropriate technique\n"),a("img",{attrs:{src:"ai360_taxonomy.png",alt:"alt text",title:"AI360 Explainability Taxonomy"}})])]),e._v(" "),a("li",[a("p",[e._v("Types:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("post-hoc")]),e._v(": explain each point/observation etc")]),e._v(" "),a("li",[a("em",[e._v("self-explaining")]),e._v(": The model to derive the explanations might not be explainable")])])]),e._v(" "),a("li",[a("p",[e._v("Key idea of the approach is to provide insight to the various people that interact with a model & it's outputs & aligns with their knowledge & skillset")]),e._v(" "),a("ul",[a("li",[e._v("Data Scientist Persona:\n"),a("ul",[a("li",[e._v("Potential Explanation Type: Interpretable models, eg rule-based")]),e._v(" "),a("li",[e._v("Focused on understanding the in's & out's of the model, it's accuracy & how it works")])])]),e._v(" "),a("li",[e._v("Business User Persona:\n"),a("ul",[a("li",[e._v("Potential Explanation Type: ProtoDash")]),e._v(" "),a("li",[e._v("Aiming to build trust by comparing with historical data/cases")])])]),e._v(" "),a("li",[e._v("Customer Persona:\n"),a("ul",[a("li",[e._v("Potential Explanation Type: Contrastive Explanation (CEN)")]),e._v(" "),a("li",[e._v("Highlight areas that directed the decision &/or areas they could change to alter the decision")])])])])])]),e._v(" "),a("h3",{attrs:{id:"package-walkthrough"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-walkthrough"}},[e._v("#")]),e._v(" Package Walkthrough")]),e._v(" "),a("p",[a("strong",[e._v("Use-case")]),e._v(": "),a("em",[e._v("whether or not a financial institute should offer a loan to a loan applicant")])]),e._v(" "),a("p",[e._v("The demo is available online but behind a login.")]),e._v(" "),a("ul",[a("li",[e._v("Alogorithm Proto-Dash:\n"),a("ul",[a("li",[e._v("Retrieves/identifies similar observations (aka "),a("code",[e._v("prototypes")]),e._v(") to the one of interest\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.ibm.com/blogs/research/2019/10/learning-implicit-generative-models/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maximum mean discrepency"),a("OutboundLink")],1),e._v(" used as the similarity metric")]),e._v(" "),a("li",[e._v("Highlights the most similar items")])])])])])]),e._v(" "),a("p",[e._v("Not all algoirthms are available yet in the package. Some of the handling for categorical variables are currently closed source but the accompanying papers should be available.")]),e._v(" "),a("h3",{attrs:{id:"demos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demos"}},[e._v("#")]),e._v(" Demos")]),e._v(" "),a("h4",{attrs:{id:"heloc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heloc"}},[e._v("#")]),e._v(" HELOC")]),e._v(" "),a("p",[e._v("Whether or not to approve a loan application.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nbviewer.jupyter.org/github/IBM/AIX360/blob/master/examples/tutorials/HELOC.ipynb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Credit Approval Tutorial"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Provides an example of supervised prototype identification based on model outputs.")]),e._v(" "),a("p",[a("em",[e._v("NOTE: In order to run the demo the data is required from FICO & requires submitting an access request")])]),e._v(" "),a("h4",{attrs:{id:"cdc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdc"}},[e._v("#")]),e._v(" CDC")]),e._v(" "),a("p",[e._v("Data investigation of survey data")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nbviewer.jupyter.org/github/IBM/AIX360/blob/master/examples/protodash/Protodash-CDC.ipynb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protodash: NHANES (CDC)"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Provides an unsupervised example of prototype identification that doesn't require a model. Can be used (as in the demo) as a data exploratory tool.")]),e._v(" "),a("p",[e._v("Can modify the distance metric to ensure prototypes generated represent particular attributes, eg gender or race coverage. Similar concepts are covered in the paper "),a("a",{attrs:{href:"https://papers.nips.cc/paper/7088-fair-clustering-through-fairlets.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fair Clustering Through Fairlets"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"dermoscopy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dermoscopy"}},[e._v("#")]),e._v(" Dermoscopy")]),e._v(" "),a("p",[e._v("Identification of skin conditions (cancer, etc) through dermoscopic images.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nbviewer.jupyter.org/github/IBM/AIX360/blob/master/examples/tutorials/dermoscopy.ipynb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Skin Lesion Classification using Dermoscopic Images"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Explainer approach is called DIP-VAE or Disentangled Inferred Prior Variational Autoencoder. Based off the following papers:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://arxiv.org/abs/1711.00848",target:"_blank",rel:"noopener noreferrer"}},[e._v("Variational Inference of Disentangled Latent Concepts from Unlabeled Observations"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://arxiv.org/pdf/1312.6114.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Auto-encoding variational Bayes"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("The focus is on explaining images, with the concept surrounding permutations of the latent representation to understand how the output image changes.")]),e._v(" "),a("ol",[a("li",[e._v("Train an autoencoder:\n"),a("ul",[a("li",[e._v('original image -> Latent features (of length N) + loss -> "predicted" image that is an exact match\n'),a("ul",[a("li",[e._v("Where loss = reconstruction loss + regulariser")])])]),e._v(" "),a("li",[e._v('The latent features are representative of the different attributes identified in the model. In addition to human input these can be labelled/associated with known "physical" items, similar to labelling clusters')]),e._v(" "),a("li",[e._v("Length N refers to each attribute learned")])])]),e._v(" "),a("li",[e._v("Modification of the latent feature values can highlight how the model reacts to different attribute changes")]),e._v(" "),a("li",[e._v("Alternatively the latent features can be used to build a simple model & used as the features. This model in addition to existing explainability tools (LIME/SHAP/etc) can be used to explain more complicated NN/DL style models")])]),e._v(" "),a("h3",{attrs:{id:"comments-on-the-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comments-on-the-library"}},[e._v("#")]),e._v(" Comments on the library")]),e._v(" "),a("ul",[a("li",[e._v("Supports both continuous & categorical features (as well as combinations of both)\n"),a("ul",[a("li",[e._v("Eg a continuous feature plus a binned version")])])]),e._v(" "),a("li",[e._v("Supports a custom method for binarising data prior to analysis\n"),a("ul",[a("li",[a("code",[e._v("FeatureBinarizer")]),e._v(" to manage this with options such as bin size")])])]),e._v(" "),a("li",[e._v("LRR: Logistic Rule Regression\n"),a("ul",[a("li",[e._v("Generates a GAM")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);