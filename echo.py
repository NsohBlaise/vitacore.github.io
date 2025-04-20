import cgi
form = cgi.FieldStorage()
print( 'Content-Type:text/html; charset=utf-8' )
print('\r\n\r\n')
print('''<!DOCTYPE HTML>
<html><title>Web server response</title>
<style>tr,th,td{border:2px solid green}</style
''')
print('<table style="width:500px"><tr><th>Key<th>Value')
for i in form.keys():
    key = str( i )
    val = str( form.getvalue(key) )
    print('<tr><td>' + key + '<td>' + val)
    print('''</tr></table>
    <img src="pwrabyss.gif"></html>''')
