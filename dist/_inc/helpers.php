<?php
const VITE_HOST = 'http://localhost:5125';

function vite(string $entry): string
{
    return "\n" . jsTag($entry)
        // . "\n" . jsPreloadImports($entry)
        . "\n" . cssTag($entry);
}


function isDev(string $entry): bool
{
    static $exists = null;
    if ($exists !== null) {
        return $exists;
    }
    $handle = curl_init(VITE_HOST . '/' . $entry);
    curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($handle, CURLOPT_NOBODY, true);

    curl_exec($handle);
    $error = curl_errno($handle);
    curl_close($handle);

    return $exists = !$error;
}


function jsTag(string $entry): string
{
    $url = isDev($entry)
        ? VITE_HOST . '/' . $entry
        : assetUrl($entry);

    if (!$url) {
        return '';
    }
    return '<script type="module" crossorigin src="'
        . $url
        . '"></script>';
}

// function jsPreloadImports(string $entry): string
// {
//     if (isDev($entry)) {
//         return '';
//     }

//     $res = '';
//     foreach (importsUrls($entry) as $url) {
//         $res .= '<link rel="modulepreload" href="'
//             . $url
//             . '">';
//     }
//     return $res;
// }

function cssTag(string $entry): string
{
    if (isDev($entry)) {
        return '';
    }

    $tags = '';
    foreach (cssUrls($entry) as $url) {
        $tags .= '<link rel="stylesheet" href="'
            . $url
            . '">';
    }
    return $tags;
}


function getManifest(): array
{
    global $root_path;
    $content = file_get_contents($root_path . '/manifest.json');
    return json_decode($content, true);
}

function assetUrl(string $entry): string
{
    global $root_path;

    $manifest = getManifest();

    return isset($manifest[$entry])
        ? $root_path . $manifest[$entry]['file']
        : '';
}

// function importsUrls(string $entry): array
// {
//     $urls = [];
//     $manifest = getManifest();

//     if (!empty($manifest[$entry]['imports'])) {
//         foreach ($manifest[$entry]['imports'] as $imports) {
//             $urls[] = '/dist/' . $manifest[$imports]['file'];
//         }
//     }
//     return $urls;
// }

function cssUrls(string $entry): array
{
    global $root_path;
    $urls = [];
    $manifest = getManifest();

    if (!empty($manifest[$entry]['css'])) {
        foreach ($manifest[$entry]['css'] as $file) {
            $urls[] = $root_path . $file;
        }
    }
    return $urls;
}