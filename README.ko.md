# Pagings

0.1.0

당신이 어떤 프론트엔드 환경을 쓰던 페이징은 한결같이 **종속성 없이** 심플하게.

## 설치

`bower install pagings`

또는 ZIP 파일을 다운로드 후 원하는 스크립트 폴더에 풀기.

요구사항: `그딴거없다.`

## 사용법

```js
//더이상 심플하게 설명이 필요한가?
Paging(document.querySelector('#paging'), {max:50});
//한번 호출 후, 다음 호출은 속성을 생략해도 설정한 값이 유지되어 일부 속성만으로 호출 가능.
Paging(document.querySelector('#paging'), {current:2}); //앞서 설정한 50페이지 중 1 페이지에서 2 페이지로 이동 효과.
//컨테이너에 페이징을 없애고자 할 경우 아래처럼 코딩하여 해결 가능.
Paging.destroy(document.querySelector('#paging'));
```

### `paging` 옵션

>`className` : *(신규)* 페이징에 들어갈 컨테이너 요소의 CSS 클래스명. 기본값 `"jquery-paging"`.

>`item` : 페이징 요소 태그명, 기본값 `"a"`.

>`itemClass` : 페이징 요소 중 페이지 수 CSS 클래스, 기본값 `"paging-item"`.

>`itemCurrent` : 현재 페이지를 나타내는 CSS 클래스이며 페이징 요소와 중첩됨, 기본값 `"selected"`.

>`format` : 페이지를 나타낼 내용, 기본값 `"[%d]"`.

>`sideClass` : 다음 또는 이전 버튼 CSS 클래스, 기본값 `"paging-side"`.

>`next` : 다음 버튼 내용. 기본값 `"[&gt;{5}]"` `("[>{5}]")`

>`prev` : 이전 버튼 내용. 기본값 `"[{4}&lt;]"` `("[{4}<]")`

>`first` : 첫 페이지 내용. 기본값 `"[1&lt;&lt;]"`

>`last` : 마지막 페이지 내용. 기본값 `"[&gt;&gt;{6}]"`

>`length` : 페이지 표시할 개수. 기본값 `10`.

>`max` : 최대 표현할 페이지 수. 기본값 `1`.

>`current` : 현재 페이지 정의. 기본값 `1`.

>`href` : a 태그일 때 링크 주소를 정의. 기본값 `"#%d"`

>`event` : 기본 이벤트 활성화. 새로고침 없이 동적으로 페이징 초기화됨. ajax에 유용. 기본값 `true`.
event=true 일 때 가능한 이벤트 정의..

>`onclick` : 페이징 버튼 클릭 시 호출. false 반환 시 동적으로 페이지가 바뀌지 않음. 동적 페이징을 원하지만 href로 인한 링크 이동을 원하지 않을 경우 이벤트 메서드인 `event.stopPropagation()` 호출.

>`onprev` : 이전 버튼 초기화 시 이벤트. `this` 는 이전 버튼 요소를 가리킴.

>`onnext` : 다음 버튼 초기화 시 이벤트. `this` 는 다음 버튼 요소를 가리킴.

>`onitem` : 각 페이지 버튼 초기화 시 이벤트. `this` 는 각 페이지 버튼 요소를 가리킴.

### 치환자

*(for `format`,`next`,`prev`,`href`,`first`,`last` property)*

>`{0}` = 클릭 시 페이지

>`{1}` = 페이지 길이

>`{2}` = 처음 페이지

>`{3}` = 마지막 페이지

>`{4}` = 이전 파트의 마지막 페이지

>`{5}` = 다음 파트의 처음 페이지

>`{6}` = 맨 마지막 페이지

## 데모

[jsFiddle](https://jsfiddle.net/composite/8eyccoft/)

## FAQ

### 이 라이브러리에 꾸미는 옵션이 있는가?

**그런거 난 모른다. 그저 얘는 페이징을 만들어 줄 뿐, 스타일시트 옵션 따위 모른다. 대신 스타일시트 클래스를 제공하니 거기 안에서 알아서 하도록.**

## 판올림 내역

- 0.1.0 : [jQeury.paging](https://github.com/composite/jQuery.paging)에서 마이그레이션으로 넘어옴.


## 라이선스

MIT
