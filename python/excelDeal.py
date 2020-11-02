import xlrd  #导入模板
import requests #http请求

def download_img(img_url, api_token,name):
    print (img_url)
    header = {"Authorization": "Bearer " + api_token} # 设置http header，视情况加需要的条目，这里的token是用来鉴权的一种方式
    r = requests.get(img_url, headers=header, stream=True)
    print(r.status_code) # 返回状态码
    if r.status_code == 200:
        open('/Users/touch/imageUrl/'+name+'.jpg', 'wb').write(r.content) # 将内容写入图片
        print("done")
    del r

data=xlrd.open_workbook('/Users/touch/Documents/01.xlsx')  #文件路径
#读取第一个表单
table = data.sheets()[0]
print(table.nrows)
count=1
i=1
while i<=table.nrows:
    name=table.cell(i,0).value
    imageUrl=table.cell(i,6).value
    if imageUrl!='-':
        print('第'+str(i)+'行');
        fileName=name+'-'+str(count);
        api_token = "fklasjfljasdlkfjlasjflasjfljhasdljflsdjflkjsadljfljsda"
        if ',' in imageUrl:
            print('特殊处理');
            imageUrl=imageUrl.split(',')[0]
        download_img(imageUrl,api_token,fileName)
        count+=1
    i+=1
print(table.nrows)