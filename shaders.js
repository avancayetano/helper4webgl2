// default shaders format

var vShaderSource = `#version 300 es

in vec4 vertex_pos;

uniform mat4 projection;
uniform mat4 camera;
uniform mat4 model;
uniform mat4 local;


void main(){
	gl_Position = projection * inverse(camera) * model * local * vertex_pos;
}
`;

var fShaderSource = `#version 300 es

precision highp float;

out vec4 outColor;

void main(){
	outColor = vec4(0, 0, 0, 1);
}
`;