<?php

if (!isset($argv[1])) {
    die("No needle\n");
}
$haystack = [0, 1, 2, 3, 4, 5, 6, 7, 8];
$needle = $argv[1];

function binarySort($needle, $haystack) {
    $lowIndex = 0;
    $highIndex = count($haystack) - 1;

    while ($lowIndex <= $highIndex) {
        $midIndex = floor(($lowIndex + $highIndex) / 2);

        if ($needle == $haystack[$midIndex]) {
            return $midIndex;
        }
        if ($needle > $haystack[$midIndex]) {
            $lowIndex = $midIndex + 1;
            continue;
        }
        if ($needle < $haystack[$midIndex]) {
            $highIndex = $midIndex - 1;
            continue;
        }
    }

    return -1;
}

die('Result:' . binarySort($needle, $haystack) . "\n");