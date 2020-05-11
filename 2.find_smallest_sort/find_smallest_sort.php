<?php
$list = [9, 4, 5, 1, 12, 0, 7, 1];
$OCount = 0;

function findSmallest($list) {
    global $OCount;

    $smallest = $list[0];
    $rest = [];

    for ($i=0; $i < count($list) - 1; $i++) {
        $OCount ++;
        if ($smallest >= $list[$i + 1]) {
            $rest[] = $smallest;
            $smallest = $list[$i + 1];
        } else {
            $rest[] = $list[$i + 1];
        }
    }

    return [$smallest, $rest];
}

function sortFromSmall($list) {
    $currentList = $list;
    $result = [];
    for ($i = 0; $i < count($list); $i++) {
        list($smallest, $currentList) = findSmallest($currentList);
        $result[] = $smallest;
    }

    return $result;
}

echo implode(', ', sortFromSmall($list)) . "\n";
var_dump($OCount === count($list) / 2 * (count($list) - 1));