## 

## Install

```
$ npm install  --save
```

## Usage

```
import MyComponent from '';
```

## API

### Props

|name|type|default|describe|
|:---------------|:--------|:----|:----------|
|name|String|''|describe|

### Function

|name|param|return|describe|
|:---------------|:--------|:----|:----------|
|name|Object|/|describe|

## Example

```
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import MyComponent from '';

render(<MyComponent />, document.body, { driver: DriverUniversal });
```