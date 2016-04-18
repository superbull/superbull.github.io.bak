---
layout: post
title:  "如何在CentOS 7上安装Nginx"
date:   2016-04-18 16:54:19
categories: server
tags: centos nginx
---

# 如何在CentOS 7上安装Nginx

## 我们将安装Nginx的mainline，也就是最新的版本。
1. 配置nginx的yum仓库。创建文件`/etc/yum.repos.d/nginx.repo`，文件的内容为

  ```
  [nginx]
  name=nginx repo
  baseurl=http://nginx.org/packages/mainline/centos/7/$basearch/
  gpgcheck=0
  enabled=1
  ```
  
2. 运行下面的命令来安装nginx

  ```
  yum install nginx
  ```
  
3. 配置文件路径：`/etc/nginx`

4. 常用命令

  ```
  # 启动
  systemctl start nginx
  
  # 关闭
  systemctl stop nginx
  
  # 重启
  systemctl restart nginx
  
  # 把nginx加入启动列表（服务器重启后能自动运行nginx）
  systemctl enable nginx
  
  ```
