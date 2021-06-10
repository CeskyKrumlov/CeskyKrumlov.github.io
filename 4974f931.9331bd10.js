(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{137:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return b})),n.d(a,"metadata",(function(){return r})),n.d(a,"rightToc",(function(){return i})),n.d(a,"default",(function(){return u}));var t=n(2),c=n(6),l=(n(0),n(331)),b={id:"deeplearningEnv",title:"Ubuntu1804_CUDA10.0_Cudnn7.6.3\u6df1\u5ea6\u5b66\u4e60\u73af\u5883\u642d\u5efa",author:"Ban",author_title:"ChangAn University",author_url:"https://ceskykrumlov.gitee.io",author_image_url:"/static/img/avatar.jpg",tags:["\u6df1\u5ea6\u5b66\u4e60","python"]},r={permalink:"/blog/deeplearningEnv",source:"@site/blog/2020-02-22-ubuntu1804_CUDA10_Cudnn7_6_3\u6df1\u5ea6\u5b66\u4e60\u73af\u5883\u642d\u5efa.md",description:"\u9884\u5907\u6750\u6599\uff1a",date:"2020-02-22T00:00:00.000Z",tags:[{label:"\u6df1\u5ea6\u5b66\u4e60",permalink:"/blog/tags/\u6df1\u5ea6\u5b66\u4e60"},{label:"python",permalink:"/blog/tags/python"}],title:"Ubuntu1804_CUDA10.0_Cudnn7.6.3\u6df1\u5ea6\u5b66\u4e60\u73af\u5883\u642d\u5efa",readingTime:3.085,truncated:!0,prevItem:{title:"LeetCode\u94fe\u8868",permalink:"/blog/leetcodeLinked"}},i=[{value:"1. \u66f4\u6362Ubuntu\u6e90",id:"1-\u66f4\u6362ubuntu\u6e90",children:[]},{value:"2. \u5b89\u88c5Nvidia\u663e\u5361\u9a71\u52a8",id:"2-\u5b89\u88c5nvidia\u663e\u5361\u9a71\u52a8",children:[{value:"2.1 \u5b89\u88c5\u4e4b\u524d\u5148\u5378\u8f7d\u5df2\u7ecf\u5b58\u5728\u7684\u9a71\u52a8\u7248\u672c",id:"21-\u5b89\u88c5\u4e4b\u524d\u5148\u5378\u8f7d\u5df2\u7ecf\u5b58\u5728\u7684\u9a71\u52a8\u7248\u672c",children:[]},{value:"2.2 \u7981\u7528 nouveau",id:"22-\u7981\u7528-nouveau",children:[]},{value:"2.3 \u5f00\u59cb\u5b89\u88c5\u9a71\u52a8",id:"23-\u5f00\u59cb\u5b89\u88c5\u9a71\u52a8",children:[]}]},{value:"3. \u5b89\u88c5CUDA 10.0",id:"3-\u5b89\u88c5cuda-100",children:[{value:"3.1 \u5b89\u88c5\u4f9d\u8d56",id:"31-\u5b89\u88c5\u4f9d\u8d56",children:[]},{value:"3.2 \u5b89\u88c5CUDA",id:"32-\u5b89\u88c5cuda",children:[]}]},{value:"4. \u5b89\u88c5Cudnn 7.6.3",id:"4-\u5b89\u88c5cudnn-763",children:[]},{value:"5. \u5b89\u88c5Anaconda",id:"5-\u5b89\u88c5anaconda",children:[]},{value:"6. \u4e0b\u8f7d\u4e0e\u8bbe\u7f6ePycharm",id:"6-\u4e0b\u8f7d\u4e0e\u8bbe\u7f6epycharm",children:[]},{value:"7. \u79bb\u7ebf\u5b89\u88c5Pytorch\u548cTorchvision",id:"7-\u79bb\u7ebf\u5b89\u88c5pytorch\u548ctorchvision",children:[{value:"7.1 \u4e0b\u8f7d\u4e0e\u5b89\u88c5",id:"71-\u4e0b\u8f7d\u4e0e\u5b89\u88c5",children:[]},{value:"7.2 \u6d4b\u8bd5",id:"72-\u6d4b\u8bd5",children:[]}]},{value:"8. \u5b89\u88c5tensorFlow-gpu 1.13.1",id:"8-\u5b89\u88c5tensorflow-gpu-1131",children:[{value:"8.1 \u6fc0\u6d3bpy36\u73af\u5883\uff0c\u4f7f\u7528\u6e05\u534e\u6e90\u5b89\u88c5",id:"81-\u6fc0\u6d3bpy36\u73af\u5883\uff0c\u4f7f\u7528\u6e05\u534e\u6e90\u5b89\u88c5",children:[]},{value:"8.2 \u6d4b\u8bd5",id:"82-\u6d4b\u8bd5",children:[]}]},{value:"\u9644\u5f55",id:"\u9644\u5f55",children:[{value:"pip\u4f7f\u7528\u6e05\u534e\u6e90",id:"pip\u4f7f\u7528\u6e05\u534e\u6e90",children:[]},{value:"Pycharm\u5185\u7f6epip\u66f4\u6362\u6e05\u534e\u6e90",id:"pycharm\u5185\u7f6epip\u66f4\u6362\u6e05\u534e\u6e90",children:[]},{value:"Pytorch\u4e0eTensorFlow\u5404\u79cd\u5bfc\u5165\u95ee\u9898",id:"pytorch\u4e0etensorflow\u5404\u79cd\u5bfc\u5165\u95ee\u9898",children:[]},{value:"\u8bbe\u7f6eUbuntu\u5c4f\u5e55\u5206\u8fa8\u7387",id:"\u8bbe\u7f6eubuntu\u5c4f\u5e55\u5206\u8fa8\u7387",children:[{value:"1. \u67e5\u770b\u5de5\u4f5c\u6a21\u5f0f",id:"1-\u67e5\u770b\u5de5\u4f5c\u6a21\u5f0f",children:[]},{value:"2. \u751f\u6210Modeline",id:"2-\u751f\u6210modeline",children:[]},{value:"3. \u7528modeline\u521b\u5efa\u65b0\u7684\u5206\u8fa8\u7387\u6a21\u5f0f",id:"3-\u7528modeline\u521b\u5efa\u65b0\u7684\u5206\u8fa8\u7387\u6a21\u5f0f",children:[]},{value:"4. \u7528addmode\u5c06\u6a21\u5f0f\u6dfb\u52a0\u5728\u663e\u793a\u5668\u4e0a",id:"4-\u7528addmode\u5c06\u6a21\u5f0f\u6dfb\u52a0\u5728\u663e\u793a\u5668\u4e0a",children:[]},{value:"5. \u8c03\u7528\u5206\u8fa8\u7387",id:"5-\u8c03\u7528\u5206\u8fa8\u7387",children:[]}]}]}],p={rightToc:i};function u(e){var a=e.components,b=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},p,b,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u9884\u5907\u6750\u6599\uff1a")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Ubuntu 18.04")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u76ee\u6807\u73af\u5883\uff1a")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Anaconda 3"),Object(l.b)("li",{parentName:"ul"},"Python 3.6"),Object(l.b)("li",{parentName:"ul"},"Pytorch 1.3"),Object(l.b)("li",{parentName:"ul"},"Tensorflow-gpu 1.13.1"),Object(l.b)("li",{parentName:"ul"},"CUDA10.0"),Object(l.b)("li",{parentName:"ul"},"Cudnn 7.6.3")),Object(l.b)("h1",{id:"1-\u66f4\u6362ubuntu\u6e90"},"1. \u66f4\u6362Ubuntu\u6e90"),Object(l.b)("p",null,"\u66f4\u6362",Object(l.b)("strong",{parentName:"p"},"\u963f\u91cc\u6e90")),Object(l.b)("p",null,"\u5de6\u4e0b\u89d2\u70b9\u5f00\uff0c\u627e\u5230",Object(l.b)("inlineCode",{parentName:"p"},"\u8f6f\u4ef6\u66f4\u65b0\u5668")," -> \u8bbe\u7f6e -> ubuntu\u8f6f\u4ef6 \u9009\u9879\u5361 -> \u4e0b\u8f7d\u81ea -> \u5176\u4ed6\u6e90 -> mirrors.aliyun.com/ubuntu\n\u5173\u95ed\u7a97\u53e3"),Object(l.b)("h1",{id:"2-\u5b89\u88c5nvidia\u663e\u5361\u9a71\u52a8"},"2. \u5b89\u88c5Nvidia\u663e\u5361\u9a71\u52a8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5b98\u7f51\u4e0b\u8f7d\u9a71\u52a8")),Object(l.b)("h2",{id:"21-\u5b89\u88c5\u4e4b\u524d\u5148\u5378\u8f7d\u5df2\u7ecf\u5b58\u5728\u7684\u9a71\u52a8\u7248\u672c"},"2.1 \u5b89\u88c5\u4e4b\u524d\u5148\u5378\u8f7d\u5df2\u7ecf\u5b58\u5728\u7684\u9a71\u52a8\u7248\u672c"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get remove --purge nvidia*\nsudo /usr/bin/nvidia-uninstall\nsudo apt-get update\nsudo apt-get install dkms build-essential linux-headers-generic\n")),Object(l.b)("h2",{id:"22-\u7981\u7528-nouveau"},"2.2 \u7981\u7528 nouveau"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u53ea\u6709\u5728\u7981\u7528\u6389 nouveau \u540e\u624d\u80fd\u987a\u5229\u5b89\u88c5 NVIDIA \u663e\u5361\u9a71\u52a8\uff0c\u7981\u7528\u65b9\u6cd5\u5c31\u662f\u5728 /etc/modprobe.d/blacklist-nouveau.conf \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4e00\u6761\u7981\u7528\u547d\u4ee4\uff0c\u9996\u5148\u9700\u8981\u6253\u5f00\u8be5\u6587\u4ef6\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6253\u5f00:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo gedit /etc/modprobe.d/blacklist.conf\n")))),Object(l.b)("p",null,"\u5728\u6700\u540e\u4e00\u884c\u52a0\u4e0a:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"blacklist nouveau \noptions nouveau modeset=0\n")),Object(l.b)("p",null,"\u5c06Ubuntu\u81ea\u5e26\u663e\u5361\u9a71\u52a8\u52a0\u5165\u9ed1\u540d\u5355"),Object(l.b)("p",null,"\u4f7f\u7981\u7528\u751f\u6548"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo update-initramfs -u \n")),Object(l.b)("h2",{id:"23-\u5f00\u59cb\u5b89\u88c5\u9a71\u52a8"},"2.3 \u5f00\u59cb\u5b89\u88c5\u9a71\u52a8"),Object(l.b)("p",null,"\u91cd\u542f\uff0c\u4e0d\u8981\u767b\u5f55\uff0c\u4f7f\u7528",Object(l.b)("inlineCode",{parentName:"p"},"Ctrl"),"+",Object(l.b)("inlineCode",{parentName:"p"},"ALt"),"+",Object(l.b)("inlineCode",{parentName:"p"},"F2"),"\u8fdb\u5165\u6587\u5b57\u754c\u9762\uff0c\u8f93\u5165",Object(l.b)("inlineCode",{parentName:"p"},"\u8d26\u6237\u540d"),"\u548c",Object(l.b)("inlineCode",{parentName:"p"},"\u5bc6\u7801"),"\u767b\u5f55\uff1b"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5b89\u88c5Lighdm"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install lightdm\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5173\u95edLightdm"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo service lightdm stop\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5b89\u88c5Nvidia\u9a71\u52a8"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"# \u4fee\u6539\u9a71\u52a8\u6587\u4ef6\u6743\u9650\nsudo chmod 777 NVIDIA-Linux-x86_64-430.xx.run\n\n#\u6267\u884c\u5b89\u88c5\u6587\u4ef6\nsudo sh ./NVIDIA-Linux-x86_64-430.xx.run \u2013no-opengl-files\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5f00\u542fLightdm"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo service lightdm start\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Ctrl"),"+",Object(l.b)("inlineCode",{parentName:"p"},"F1"),"\u767b\u5f55")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u9a8c\u8bc1\u5b89\u88c5"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo nvidia-smi\n")))),Object(l.b)("h1",{id:"3-\u5b89\u88c5cuda-100"},"3. \u5b89\u88c5CUDA 10.0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4e0b\u8f7d")),Object(l.b)("p",null,Object(l.b)("img",{alt:"1",src:n(450).default})),Object(l.b)("h2",{id:"31-\u5b89\u88c5\u4f9d\u8d56"},"3.1 \u5b89\u88c5\u4f9d\u8d56"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install freeglut3-dev libx11-dev libxmu-dev libxi-dev libgl1-mesa-glx libglu1-mesa libglu1-mesa-dev\n")),Object(l.b)("h2",{id:"32-\u5b89\u88c5cuda"},"3.2 \u5b89\u88c5CUDA"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo sh cuda_10.0.130_410.48_linux.run \n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6839\u636e\u63d0\u793a\u5b89\u88c5\uff1a"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"Do you accept the previously read EULA?\naccept\n\nInstall NVIDIA Accelerated Graphics Driver for Linux-x86_64 410.48?\nNo\n\nInstall the CUDA 10.0 Toolkit?\nyes\n\nEnter Toolkit Location\n\u56de\u8f66\n\nDo you want to install a symbolic link at /usr/local/cuda?\nyes\n\nInstall the CUDA 10.0 Samples?\nyes\n\nEnter CUDA Samples Location\n\u56de\u8f66\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6dfb\u52a0\u73af\u5883\u53d8\u91cf"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo gedit ~/.bashrc\n")),Object(l.b)("p",{parentName:"li"},"\u5728\u672b\u5c3e\u6dfb\u52a0\uff1a"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"export PATH=$PATH:/usr/local/cuda-10.0/bin\nexport LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/cuda-10.0/lib64\nexport LIBRARY_PATH=$LIBRARY_PATH:/usr/local/cuda-10.0/lib64\n")),Object(l.b)("p",{parentName:"li"},"\u751f\u6548\uff1a"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"# \u5fc5\u987b\u5f00\u542f\u53e6\u4e00\u4e2a\u7ec8\u7aef\u6267\u884c\nsource .bashrc\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u9a8c\u8bc1\u5b89\u88c5"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"nvcc -V\n")),Object(l.b)("p",{parentName:"li"},"\u51fa\u73b0\u7248\u672c\u4fe1\u606f\u5219\u5b89\u88c5\u6210\u529f"))),Object(l.b)("h1",{id:"4-\u5b89\u88c5cudnn-763"},"4. \u5b89\u88c5Cudnn 7.6.3"),Object(l.b)("p",null,"\u641c\u7d22Cudnn\u5b98\u7f51\uff0c\u5f04\u4e00\u4e2a\u53f7\u8fdb\u53bb\uff0c\u9009\u62e9\u5386\u53f2\u7248\u672c\uff0c\u9009\u62e97.6.3\uff0c \u4e0b\u8f7d",Object(l.b)("inlineCode",{parentName:"p"},"libaray for linux"),"\uff0c \u4e0d\u8981\u9009ubuntu\u7248\u672c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5b89\u88c5"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"#cudnn\u5b89\u88c5\uff08\u6587\u4ef6\u540d\u81ea\u5df1\u6362\uff09\ntar -zxvf cudnn-10.0-linux-x64-v7.5.0.56.tgz\n\n#\u8fd9\u4e09\u53e5\u4e0d\u7528\u6362\nsudo cp cuda/include/cudnn.h /usr/local/cuda/include\nsudo cp cuda/lib64/libcudnn* /usr/local/cuda/lib64\nsudo chmod a+r /usr/local/cuda/include/cudnn.h /usr/local/cuda/lib64/libcudnn*\n")))),Object(l.b)("h1",{id:"5-\u5b89\u88c5anaconda"},"5. \u5b89\u88c5Anaconda"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u4e0b\u8f7d"),Object(l.b)("p",{parentName:"li"},"\u641c\u7d22",Object(l.b)("inlineCode",{parentName:"p"},"\u6e05\u534e\u6e90"),"\uff0c\u8fdb\u5165\u6e05\u534e\u5927\u5b66\u955c\u50cf\u7f51\u7ad9\uff0c \u8fdb\u5165 ",Object(l.b)("inlineCode",{parentName:"p"},"anaconda/archive")),Object(l.b)("p",{parentName:"li"},"\u641c\u7d22",Object(l.b)("inlineCode",{parentName:"p"},"Anaconda3-2019.10-Linux-x86_64.sh"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u4fee\u6539Anaconda\u6587\u4ef6\u5939\u6743\u9650"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sudo chown \u7528\u6237\u540d anaconda3/ -R\nsudo chown \u7528\u6237\u540d .conda/ -R\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u4fee\u6539Anaconda\u4e3a\u6e05\u534e\u6e90"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/\n\nconda config --set show_channel_urls yes\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u521b\u5efa\u540d\u4e3apy36\u7684Python3.6\u865a\u62df\u73af\u5883"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"conda create -n py36 python=3.6\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5207\u6362\u73af\u5883"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"source activate py36\n")))),Object(l.b)("h1",{id:"6-\u4e0b\u8f7d\u4e0e\u8bbe\u7f6epycharm"},"6. \u4e0b\u8f7d\u4e0e\u8bbe\u7f6ePycharm"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u4e0b\u8f7dPycharm\u793e\u533a\u7248")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u5c06Pycharm\u9ed8\u8ba4\u73af\u5883\u8bbe\u7f6e\u4e3apy36"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"/* \n    settings ->\n    Project Interpreter ->\n    \u53f3\u4e0a\u89d2\u5c0f\u9f7f\u8f6e ->\n    add ->\n    conda Enviornment ->\n    Exisiting Environment ->\n    \u8bbe\u7f6e\u8def\u5f84 ->\n  /home/\u4f60\u7684\u7528\u6237\u540d/anaconda3/envs/py36/bin/python3\n\n    \u52fe\u9009 Make available to all projects\n*/\n")))),Object(l.b)("h1",{id:"7-\u79bb\u7ebf\u5b89\u88c5pytorch\u548ctorchvision"},"7. \u79bb\u7ebf\u5b89\u88c5Pytorch\u548cTorchvision"),Object(l.b)("h2",{id:"71-\u4e0b\u8f7d\u4e0e\u5b89\u88c5"},"7.1 \u4e0b\u8f7d\u4e0e\u5b89\u88c5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u8fdb\u5165\u6e05\u534e\u6e90\uff0c\u8fdb\u5165",Object(l.b)("inlineCode",{parentName:"p"},"anaconda/cloud/pytorch"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u641c\u7d22pytorch1.3 py36 cuda100 linux")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u641c\u7d22torchvision 0.4.0")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6fc0\u6d3bpy36\u73af\u5883\uff0c\u7528\u4ee5\u4e0b\u547d\u4ee4\u79bb\u7ebf\u5b89\u88c5"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"conda install --offline XXXX..tar.bz2\n")))),Object(l.b)("h2",{id:"72-\u6d4b\u8bd5"},"7.2 \u6d4b\u8bd5"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5bfc\u5165\u6709\u9519\u7684\u8bdd\uff0c\u89e3\u51b3\u65b9\u5f0f\u8bf7\u770b\u9644\u5f55")),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),"from __future__ import print_function\nimport torch\nx = torch.rand(5, 3)\nprint(x)\n\n\nimport torch\nprint(torch.cuda.is_available())\n")),Object(l.b)("h1",{id:"8-\u5b89\u88c5tensorflow-gpu-1131"},"8. \u5b89\u88c5tensorFlow-gpu 1.13.1"),Object(l.b)("h2",{id:"81-\u6fc0\u6d3bpy36\u73af\u5883\uff0c\u4f7f\u7528\u6e05\u534e\u6e90\u5b89\u88c5"},"8.1 \u6fc0\u6d3bpy36\u73af\u5883\uff0c\u4f7f\u7528\u6e05\u534e\u6e90\u5b89\u88c5"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"pip install -i https://pypi.tuna.tsinghua.edu.cn/simple tensorflow-gpu==1.13.1\n")),Object(l.b)("h2",{id:"82-\u6d4b\u8bd5"},"8.2 \u6d4b\u8bd5"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),"import tensorflow as tf\n\nwith tf.device('/cpu:0'):\n    a = tf.constant([1.0, 2.0, 3.0], shape=[3], name='a')\n    b = tf.constant([1.0, 2.0, 3.0], shape=[3], name='b')\nwith tf.device('/gpu:1'):\n    c = a + b\n\n# \u6ce8\u610f\uff1aallow_soft_placement=True\u8868\u660e\uff1a\u8ba1\u7b97\u8bbe\u5907\u53ef\u81ea\u884c\u9009\u62e9\uff0c\u5982\u679c\u6ca1\u6709\u8fd9\u4e2a\u53c2\u6570\uff0c\u4f1a\u62a5\u9519\u3002\n# \u56e0\u4e3a\u4e0d\u662f\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u53ef\u4ee5\u88ab\u653e\u5728GPU\u4e0a\uff0c\u5982\u679c\u5f3a\u884c\u5c06\u65e0\u6cd5\u653e\u5728GPU\u4e0a\u7684\u64cd\u4f5c\u6307\u5b9a\u5230GPU\u4e0a\uff0c\u5c06\u4f1a\u62a5\u9519\u3002\nsess = tf.Session(config=tf.ConfigProto(allow_soft_placement=True, log_device_placement=True))\n# sess = tf.Session(config=tf.ConfigProto(log_device_placement=True))\nsess.run(tf.global_variables_initializer())\nprint(sess.run(c))\n")),Object(l.b)("h1",{id:"\u9644\u5f55"},"\u9644\u5f55"),Object(l.b)("h2",{id:"pip\u4f7f\u7528\u6e05\u534e\u6e90"},"pip\u4f7f\u7528\u6e05\u534e\u6e90"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"pip install -i https://pypi.tuna.tsinghua.edu.cn/simple tensorflow-gpu==1.13.1(\u6362\u4f60\u8981\u88c5\u7684\u5305)\n")),Object(l.b)("h2",{id:"pycharm\u5185\u7f6epip\u66f4\u6362\u6e05\u534e\u6e90"},"Pycharm\u5185\u7f6epip\u66f4\u6362\u6e05\u534e\u6e90"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"https://www.jianshu.com/p/21982f0f6b55\n")),Object(l.b)("h2",{id:"pytorch\u4e0etensorflow\u5404\u79cd\u5bfc\u5165\u95ee\u9898"},"Pytorch\u4e0eTensorFlow\u5404\u79cd\u5bfc\u5165\u95ee\u9898"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u66f4\u65b0numpy"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"pip uninstall numpy\npip install -i https://pypi.tuna.tsinghua.edu.cn/simple numpy\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u7f3a\u5404\u79cdmkl\u6587\u4ef6\u7684\u60c5\u51b5"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"# libmkl_intel_lp64.so: cannot open shared object file: No such file or directory\n\n# \u901a\u8fc7\u547d\u4ee4\u67e5\u627e\u6587\u4ef6\u4f4d\u7f6e\nsudo find /home -name libmkl_intel_lp64.so\n\n# \u5c06\u67e5\u5230\u7684\u6587\u4ef6\u8def\u5f84\u590d\u5236\u5230usr/local/lib\u76ee\u5f55\u4e0b\nsudo cp /home/cesky001/anaconda3/lib/libmkl_intel_lp64.so /usr/local/lib/libmkl_intel_lp64.so && sudo ldconfig\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"\u7f3a\u5404\u79cdcuda\u6587\u4ef6\u7684\u60c5\u51b5"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"# \u5c06\u76f8\u5e94\u7684\u5e93\u6587\u4ef6\u590d\u5236\u5230/usr/lib\uff08\u6839\u636e\u7f3a\u5931\u6587\u4ef6\u81ea\u884c\u4fee\u6539\uff09\nsudo cp /usr/local/cuda-10.0/lib64/libcudnn.so.7 /usr/local/lib/libcudnn.so.7 && sudo ldconfig\n\n#ldconfig\u547d\u4ee4\u662f\u4e00\u4e2a\u52a8\u6001\u94fe\u63a5\u5e93\u7ba1\u7406\u547d\u4ee4\uff0c\u662f\u4e3a\u4e86\u8ba9\u52a8\u6001\u94fe\u63a5\u5e93\u4e3a\u7cfb\u7edf\u5171\u4eab\n")))),Object(l.b)("h2",{id:"\u8bbe\u7f6eubuntu\u5c4f\u5e55\u5206\u8fa8\u7387"},"\u8bbe\u7f6eUbuntu\u5c4f\u5e55\u5206\u8fa8\u7387"),Object(l.b)("h3",{id:"1-\u67e5\u770b\u5de5\u4f5c\u6a21\u5f0f"},"1. \u67e5\u770b\u5de5\u4f5c\u6a21\u5f0f"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"xrandr\n")),Object(l.b)("h3",{id:"2-\u751f\u6210modeline"},"2. \u751f\u6210Modeline"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"cvt 1920 1080\n")),Object(l.b)("h3",{id:"3-\u7528modeline\u521b\u5efa\u65b0\u7684\u5206\u8fa8\u7387\u6a21\u5f0f"},"3. \u7528modeline\u521b\u5efa\u65b0\u7684\u5206\u8fa8\u7387\u6a21\u5f0f"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'xrandr --newmode "1920x1080_60.00"  173.00  1920 2048 2248 2576  1080 1083 1088 1120 -hsync +vsync\n')),Object(l.b)("h3",{id:"4-\u7528addmode\u5c06\u6a21\u5f0f\u6dfb\u52a0\u5728\u663e\u793a\u5668\u4e0a"},"4. \u7528addmode\u5c06\u6a21\u5f0f\u6dfb\u52a0\u5728\u663e\u793a\u5668\u4e0a"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'xrandr --addmode VGA1 "1920x1080_60.00"\n')),Object(l.b)("h3",{id:"5-\u8c03\u7528\u5206\u8fa8\u7387"},"5. \u8c03\u7528\u5206\u8fa8\u7387"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'xrandr --output VGA1 --mode "1920x1080_60.00"\n')))}u.isMDXComponent=!0},331:function(e,a,n){"use strict";n.d(a,"a",(function(){return o})),n.d(a,"b",(function(){return m}));var t=n(0),c=n.n(t);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function b(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?b(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),u=function(e){var a=c.a.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},o=function(e){var a=u(e.components);return c.a.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return c.a.createElement(c.a.Fragment,{},a)}},s=c.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=u(n),s=t,m=o["".concat(b,".").concat(s)]||o[s]||d[s]||l;return n?c.a.createElement(m,r(r({ref:a},p),{},{components:n})):c.a.createElement(m,r({ref:a},p))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,b=new Array(l);b[0]=s;var r={};for(var i in a)hasOwnProperty.call(a,i)&&(r[i]=a[i]);r.originalType=e,r.mdxType="string"==typeof e?e:t,b[1]=r;for(var p=2;p<l;p++)b[p]=n[p];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},450:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/1-ca4cd27b88e525cc6c2afb0e154d2588.png"}}]);