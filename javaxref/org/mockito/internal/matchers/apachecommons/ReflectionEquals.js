defineStructure(
"ReflectionEquals",function(factory){with(factory) { typeTable(["org.hamcrest.Description","it"],["org.mockito.ArgumentMatcher","cl"],["org.mockito.internal.matchers.apachecommons.ReflectionEquals","cl"],["java.lang.Object","cl"],["org.mockito.internal.matchers.apachecommons.EqualsBuilder","cl"],["java.lang.String","cl"]),methodTable([2,"ReflectionEquals",[3],"co"],[2,"matches",[3],"me"],[1,"matches",[3],"me"],[4,"reflectionEquals",[3,3],"st me"],[2,"describeTo",[0],"me"],[1,"describeTo",[0],"me"],[0,"appendText",[5],"me"]),localVariableTable(["wanted","<init>(java.lang.Object)-wanted"],["actual","matches(java.lang.Object)-actual"],["description","describeTo(org.hamcrest.Description)-description"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockito.internal.matchers.apachecommons;",nl,nl,ip," org.hamcrest.",T(0),";",nl,ip," org.mockito.",T(1),";",nl,nl,nl,C(2,[],$(pu,_,c,_,I("ReflectionEquals"),_,ex,_,T(1),"&lt;",T(3),">",B(nl,w(4),F(pi,_,f,_,T(3),_,I("wanted"),";"),nl,nl,w(4),M(0,[],[],$(pu," ReflectionEquals",P(V(0,$(T(3),_,I("wanted")))),_,B(nl,w(8),t,".",G(2,"fi","wanted")," = ",W(0),";",nl,w(4)))),nl,nl,w(4),M(1,[2],[],$(pu,_,b,_,I("matches"),P(V(1,$(T(3),_,I("actual")))),_,B(nl,w(8),r,_,T(4),".",N(3),P(G(2,"fi","wanted"),", ",W(1)),";",nl,w(4)))),nl,nl,w(4),M(4,[5],[],$(pu,_,v,_,I("describeTo"),P(V(2,$(T(0),_,I("description")))),_,B(nl,w(8),W(2),".",N(6),P(L("\"refEq(\"")," + ",G(2,"fi","wanted")," + ",L("\")\"")),";",nl,w(4)))),nl))));}});