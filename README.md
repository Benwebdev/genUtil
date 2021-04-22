```javascript
import genUtil from '@benline/genUtil'; 
// or import what you need
import { all, debounce } from "@benline/genUtil";
```

## All

Build a macro-promise for all given promises. This is useful when waiting on multiple state resolutions, allowing multiple promises to be tracked by an aggregate.

## CurrentURL
Return the current url without query or anchor

## Debounce
Debounces a function to only run after repeated invocations have stopped.

## Deparamitize
Parses a params string into an object.

## Escape
Parses a string and escapes HTML to the proper entities

## EscapeMap

## Extend
Extends a base object with properties from additional passed objects:

## Get
Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.

## LoadScript
Loads a script file - This uses the shared "Chorus.AddScript" if available but backs up to standard dom-based injection

## Paramitize
Parses a params object into a query string.

## Pick 
Picks select attributes names from an object.

## Trottle
Throttles a function to only run once ever N milliseconds

## Unescape
Parses a string and unescapes HTML to the proper entities

## urlParams 
Get urlParams to parse
