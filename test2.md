---
layout: default
title: Khalil
author: "Khalil"
published: true
---

<style>
body {
  padding-top:200px;}
  
  details {
    border: none;
    padding: 0;
    margin-bottom: 1em;
    font-family: sans-serif;
    width:90%;margin:0 auto;
  }

  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.1em;
    padding: 0.5em 0;
  }

  summary::marker {
    display: none;
  }

  summary::after {
    content: "+";
    font-size: 1.2em;
    transition: transform 0.2s;
  }

  details[open] summary::after {
    content: "–";
  }

  .details-content {
    padding-top: 0.5em;
    font-size: 0.95em;
    line-height: 1.5;
    color: #444;
  }
</style>

<details>
  <summary><span>DETAILS</span></summary>
  <div class="details-content">
    This is the product description. You can put anything here like size, material, care instructions, or unique features of the product.
  </div>
</details>