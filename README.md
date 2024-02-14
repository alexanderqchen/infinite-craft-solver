# Infinite Craft Solver

## How to collect data

fetch.js is the file that collects data about how to craft items. It is purely brute force.

To run fetch.js, open https://neal.fun/infinite-craft/, open the console, and paste the fetch.js code in there.

This will continue where we left off and add new data to the data object.

Every 100 iterations, it will log the updated data. You can paste this data into fetchItems.json as a data store. Then make sure to copy this data into fetch.js

## How to automate the game

In order to generate an optimal path to beat the game, you run `node optimalpath.js`. This prints the exact clicks that need to be performed for the optimal path.

Copy this list into runOptimalPath.js. Then open the console in the browser and paste the code in.

## Limitations

Currently optimalPath fails occassionally, depending on the performance of your computer. This is because it relies on setTimeout which does not guarantee the correct amount of time is waited.

For example, if your computer is slow, the browser may fall behind tasks in the queue. When this happens, your browser may try to "catch up" and do 2 tasks in quick succession. This causes issues because some time is needed for the website to register the button clicks.

To fix this, we should do timestamp-based sleeping. This guarantees that a set amount of time has passed between each task. This guaranteed minimum allows us to run the script faster and without errors.
