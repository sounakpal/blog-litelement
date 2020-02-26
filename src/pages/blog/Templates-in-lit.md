---
templateKey: blog-post
title: Templates in Lit
date: 2020-02-26T03:04:10.000Z
description: >-
  We will learn the concept of light DOM, how to query DOM, and run a repeat in
  templates.
featuredpost: false
featuredimage: /img/flavor_wheel.jpg
tags:
  - Template
  - lit-html
  - repeat
---
## Light DOM are Alternatives

If you don't want to use Shadow DOM, you can overwrite the \`createRenderRoot\` method. By default, LitElement sets the render root to the Shadow DOM. 

Try using it for some complicated ones which need some extensive and complicated SLOT handling. We also found a blocker of using SVG with this approach. The SVG stopped working in FireFox when consumed inside a shadow component.

![createRenderRoot](/img/light-dom.png "Code block")

## Query Selectors is Shadow

Use regular query selectors on the element instance to access your DOM nodes.

LitElement uses Shadow DOM, so the selector should be done on the shadowRoot of the element. 

![query-dom-in-litelements](/img/query-selector-shadow.png "query-dom-in-litelements")

Always be aware that the first render of the element happens async, so the requested DOM nodes might not be available when running this function.

![]()

## Repeat in Lit

For dynamic lists that are re-ordered frequently, you can use the repeat directive. This directive handles efficient re-ordering of DOM nodes without unnecessarily recreating them. For this to work, items in the list should be unique. An identify function is passed to tell the directive how to identify individual items.

![](/img/repeat-lit.png)
