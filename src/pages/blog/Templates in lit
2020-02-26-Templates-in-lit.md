---
templateKey: blog-post
title: Templates in lit
date: 2020-02-26T03:04:10.000Z
featuredpost: false
featuredimage: /img/flavor_wheel.jpg
description: We will learn the idea of light dom, how to query DOM, run a repeat in templates.
tags:
  - Template
  - lit-html
  - repeat
---


## Light Dom

If you don't want to use shadow DOM, you can overwrite the \`createRenderRoot\` method. By default, LitElement sets the render root to the shadowDom. 

Try using it for some complicated ones which needs some extensive and complicated SLOT handling. Also we found a blocker of using svg with this approach. The svg stopped working in FireFox when consumed inside a shadow component.

![createRenderRoot](/img/light-dom.png "Code block")

## Query Selectors

Use regular query selectors on the element instance to access your dom nodes.

LitElement uses shadow dom, so the selector should be done on the shadowroot of the element. 

![query-dom-in-litelements](/img/query-selector-shadow.png "query-dom-in-litelements")

 Always be aware that the first render of the element happens async, so the requested dom nodes might not be available when running this function.

![]()

## Repeat

For dynamic lists that are re-ordered frequently, you can use the repeat directive. This directive handles efficient re-ordering of dom-nodes without unnecessarily recreating them. For this to work, items in the list should be unique. An identify function is passed to tell the directive how to identify individual items.

![](/img/repeat-lit.png)
