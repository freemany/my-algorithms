<?php
$arr = [9, 0, 5, 2, 4, 8, 7, 6, 1, 3, 10];
$expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function qSort($arr) {
    if (count($arr) < 2) {
        return $arr;
    }

    $pivot = $arr[0];
    $rest = array_slice($arr, 1);
    $front = [];
    $behind = [];

    foreach($rest as $a) {
        if ($a >= $pivot) {
            $behind[] = $a;
        } else {
            $front[] = $a;
        }
    }

    return array_merge(qSort($front), [$pivot], qSort($behind));
}

var_dump(qSort($arr) === $expected);