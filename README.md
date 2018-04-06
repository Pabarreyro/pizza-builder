# **Pizza Builder**

#### Pablo Barreyro

## Description

A website for a fictional pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, _etc._) and a size to order a pizza and see the final cost.

**BDD Breakdown**

Behavior | Input | Output
------------ | ------------- | -------------
Create a new pizza for order | Start pizza | newPizza = {size: "", toppings: [], price: 0}
Change size of a pizza | <input type="radio" name="size" value="small" checked> Small | newPizza.size = "small",<br>
Add topping to a pizza| <input type="radio" name="topping" value="anchovy"> Anchovy<br><input type="radio" name="topping" value="cheese" checked> Cheese | newPizza.toppings = [1: Topping {name: "cheese", price: 0 ]
Determine the price of a pizza | Finish Order | newPizza.price = 12




## Setup/Installation Requirements

* [View/Clone repo](https://github.com/pabarreyro/pizza-builder)
* [View demo](https://pabarreyro.github.io/pizza-builder)

## Technologies Used

* HTML
* CSS _(Bootstrap 4)_
* JavaScript _(jQuery 3.3.2)_

## License

MIT License

Copyright (c) 2018 Pablo Barreyro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2018 **_Pablo Barreyro_**
