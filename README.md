# Pagings

*migrated from [jQeury.paging](https://github.com/composite/jQuery.paging)*

`0.1.0`

The pagination made simple **without any dependencies**. even you using any front-end enviroment.

[한국어 README](README.ko.md)

## What is paging? are you english dummy?

oh, sorry western users. this is a simple pagination library.
most korean users called pagination as "paging".
so, I decided named to "pagings" from few years ago for korean users.

## Install

`bower install pagings`

or, download ZIP, extract and place files to your script folder.

requirements: `NOPE.avi`

## Usage

```js
//I think there is no more simpler than this code.
Paging(document.querySelector('#paging'), {max:50});
//If pagination applied, you can call again without full option arguments.
//that is, you can call again that you need something change. such as change current page:
Paging(document.querySelector('#paging'), {current:2}); // you will change page 2 instead of 1 of 50 page.
//or, if you wanna destroy pagination, write simple call below:
Paging.destroy(document.querySelector('#paging'));

//if your browser support HTMLElement, you can also make pagination as HTMLElement member.
document.querySelector('#paging').paging({max:60});
```

### `paging` options

>`className` : *(new)* the pagination container css class name. default is `"pagings-area"`.

>`item` : item tag element name, default is `"a"`.

>`itemClass` : item tag element class, default is `"pagings-item"`.

>`itemCurrent` : current page element class. this class will append with item class, default is `"selected"`.

>`format` : a content of page element, default is `"[%d]"`.

>`sideClass` : class for next and prev button, default is `"pagings-side"`.

>`next` : a content of next page element. default is `"[&gt;{5}]"` `("[>{5}]")`

>`prev` : a content of prev page element. default is `"[{4}&lt;]"` `("[{4}<]")`

>`first` : a content of first page element. default is `"[1&lt;&lt;]"`

>`last` : a content of last page element. default is `"[&gt;&gt;{6}]"`

>`length` : length of display pages. default is `10`.

>`max` : defines max page. default is `1`.

>`current` : defines default page. default is `1`.

>`href` : if item tag name is 'a', activate link each item. default is `"#%d"`

>`event` : activate default events. If you click any item, change paging dynamically. usally for ajax. default is `true`.
these event will only affected when event=true.

>`onclick` : fire event if clicked any items. if you returns false, will not refresh paging. if you want apply paging but you won't any action such as link action, call `event.stopPropagation()`!

>`onprev` : init additional operation for prev button. `this` scopes prev button element.

>`onnext` : init additional operation for next button. `this` scopes next button element.

>`onitem` : init additional operation for each page item button. `this` scopes any page item element.

### Substitution

*(for `format`,`next`,`prev`,`href`,`first`,`last` property)*

>`{0}` = item page

>`{1}` = page length

>`{2}` = start page

>`{3}` = end page

>`{4}` = last page of prev part

>`{5}` = start page of next part

>`{6}` = max page

## Demo

[jsFiddle](https://jsfiddle.net/composite/8eyccoft/)

## FAQ

###is this library support css styling?

**NO. THIS LIBRARY IS ONLY FOR MAKE PAGINATION. THIS LIBRARY IS HAVE NO ANY STYLING OPTION. STYLE IT YOURSELF WITH PAGINGS MADE ELEMENT CLASS NAME.**

## Changelog

- 0.1.0 migrated from [jQeury.paging](https://github.com/composite/jQuery.paging)


## License

MIT
