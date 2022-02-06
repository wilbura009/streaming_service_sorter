#!/usr/bin/env bash

# -- Example --
<<'COMMENT'
montage -background '#000000' \
img/img1.jpg \
img/img2.jpg \
img/img3.jpg \
img/img4.jpg \
img/img5.jpg \
img/img6.jpg \
img/img7.jpg \
img/img8.jpg \
-tile 4x4 -geometry +1+1 \
output.png
COMMENT

# -- Resize images --
mogrify -resize 512x img/*.jpg

# -- Put images in array --
readarray -t FILES < <(find . -type f -path "*img*/*.jpg")

# -- Testing --
#NUMFILES=${#FILES[@]}
#FILELIST=${FILES[@]}

# -- Create collage and set the background black --
montage -background '#000000' \
"${FILES[@]}" \
-tile 4x4 -geometry +1+1 \
collage.png
