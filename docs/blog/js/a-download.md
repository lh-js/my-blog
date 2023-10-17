### 通过接口跨域请求，动态创建a标签，以blob形式下载

解决资源url后面拼接参数之后a标签跳转而不下载的问题

```js
// 用fetch发送请求
fetch('/upload/user.png').then((res) => {
  res.blob().then((blob) => {
    const blobUrl = window.URL.createObjectURL(blob);
    // 这里的文件名根据实际情况从响应头或者url里获取
    const filename = 'user.jpg';
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;;
    a.click();
    window.URL.revokeObjectURL(blobUrl);
  });
});
```