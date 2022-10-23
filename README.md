# helper4webgl2
[WIP] A low-level helper library for WebGL2.

Sample: https://avancayetano.github.io/helper4webgl2/sample/

## Rendering pipeline
$$ v_{screen} = P \cdot M \cdot L \cdot v_{local} $$

where: <br/>
$v_{local}$ is the vertex position with respect to the local coordinate. <br/><br/>
$L$ is the local matrix, which is the product of the local transformations of the object, e.g. local rotations, local translation, local scaling, etc. <br/><br/>
$M$ is the model matrix, which transforms the local coordinate to the world coordinate. <br/>

$$ 
  M = 
  \begin{bmatrix}
    1 & 0 & 0 & tx\\
    0 & 1 & 0 & ty\\
    0 & 0 & 1 & tz\\
    0 & 0 & 0 & 1
  \end{bmatrix}
$$

where $(tx, ty, tz)$ is the center of the model. <br/>

$P$ is the projection matrix, which transforms 3D (4D) space to clip space.

$$
  \begin{bmatrix}
    \frac{2}{width} & 0 & 0 & -1\\
    0 & \frac{-2}{height} & 0 & 1\\
    0 & 0 & \frac{2}{farZ - nearZ} & -\left(\frac{2nearZ}{farZ-nearZ} + 1\right)\\
    0 & 0 & \frac{1}{nearZ} & 0.0001
  \end{bmatrix}
$$

The above matrix transforms the vertex $(x_i, y_i, z_i, 1)$ in 3D (4D) coordinate space to clip space $(-1 \leq x_f, y_f, z_f \leq 1)$. Moreover, the "normalization" factor $w$ (aka the fourth dimension of the vertex) becomes $\frac{z_i}{nearZ} + 0.0001$. The 0.0001 is to avoid dividing the vertex by zero in case $z = 0$ since WebGL automatically divides the vertex by $w$ to "normalize" it.


## Todo
* Bezier curves
* Rendering batches
* Camera matrix



