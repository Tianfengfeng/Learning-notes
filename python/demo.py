# coding=utf-8
import xlrd  #导入模板
data=xlrd.open_workbook("D:/phone.xlsx")  #文件路径     
#读取第一个表单
table = data.sheets()[0]
print(table.nrows)
count=1
i=1
while i<table.nrows:
    name=table.cell(i,2).value
    phone=table.cell(i,3).value
    print(name)
    print(phone)
    if phone!='-':
        # print('序号'+'-'+str(count)+name+'的电话'+phone);
        count+=1
    i+=1
print(table.nrows)
