defineStructure(
"MockUtil",function(factory){with(factory) { typeTable(["net.sf.cglib.proxy.Enhancer","cl"],["net.sf.cglib.proxy.Factory","it"],["org.mockito.exceptions.base.MockitoException","cl"],["org.mockito.exceptions.misusing.NotAMockException","cl"],["org.mockito.internal.MockHandler","cl"],["org.mockito.internal.creation.MethodInterceptorFilter","cl"],["org.mockito.internal.creation.MockFactory","cl"],["org.mockito.internal.invocation.MatchersBinder","cl"],["org.mockito.internal.progress.MockingProgress","it"],["org.mockito.internal.util.MockUtil","cl"],["java.lang.Class","cl"],["java.lang.String","cl"],["org.mockito.internal.creation.MockAwareInterceptor","it"],["java.lang.Object","cl"],["java.lang.ClassCastException","cl"],["java.lang.SuppressWarnings","an"]),methodTable([9,"createMock",[10,11,8],"st me"],[6,"MockFactory",[],"co"],[4,"MockHandler",[11,8,7],"co"],[7,"MatchersBinder",[],"co"],[5,"MethodInterceptorFilter",[10,12],"co"],[6,"createMock",[10,5],"me"],[9,"getMockHandler",[13],"st me"],[3,"NotAMockException",[11],"co"],[0,"isEnhanced",[10],"st me"],[13,"getClass",[],"me"],[9,"getInterceptor",[13],"st me"],[5,"getDelegate",[],"me"],[1,"getCallback",["int"],"me"],[9,"validateMock",[13],"st me"],[9,"isMock",[13],"st me"],[9,"getMockName",[13],"st me"],[4,"getMockName",[],"me"]),localVariableTable(["classToMock","createMock(java.lang.Class,java.lang.String,org.mockito.internal.progress.MockingProgress)-classToMock"],["mockName","createMock(java.lang.Class,java.lang.String,org.mockito.internal.progress.MockingProgress)-mockName"],["progress","createMock(java.lang.Class,java.lang.String,org.mockito.internal.progress.MockingProgress)-progress"],["proxyFactory","createMock(java.lang.Class,java.lang.String,org.mockito.internal.progress.MockingProgress)-proxyFactory"],["mockHandler","createMock(java.lang.Class,java.lang.String,org.mockito.internal.progress.MockingProgress)-mockHandler"],["filter","createMock(java.lang.Class,java.lang.String,org.mockito.internal.progress.MockingProgress)-filter"],["mock","getMockHandler(java.lang.Object)-mock"],["e","getMockHandler(java.lang.Object)-e"],["mock","getInterceptor(java.lang.Object)-mock"],["factory","getInterceptor(java.lang.Object)-factory"],["mock","validateMock(java.lang.Object)-mock"],["mock","isMock(java.lang.Object)-mock"],["e","isMock(java.lang.Object)-e"],["mock","getMockName(java.lang.Object)-mock"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockito.internal.util;",nl,nl,ip," net.sf.cglib.proxy.",T(0),";",nl,ip," net.sf.cglib.proxy.",T(1),";",nl,nl,ip," org.mockito.exceptions.base.",T(2),";",nl,ip," org.mockito.exceptions.misusing.",T(3),";",nl,ip," org.mockito.internal.",T(4),";",nl,ip," org.mockito.internal.creation.",T(5),";",nl,ip," org.mockito.internal.creation.",T(6),";",nl,ip," org.mockito.internal.invocation.",T(7),";",nl,ip," org.mockito.internal.progress.",T(8),";",nl,nl,C(9,[],$(pu,_,c,_,I("MockUtil"),_,B(nl,w(4),nl,w(4),M(0,[],[],$(pu,_,s," &lt;T> T ",I("createMock"),P(V(0,$(T(10),"&lt;T> ",I("classToMock"))),", ",V(1,$(T(11),_,I("mockName"))),", ",V(2,$(T(8),_,I("progress")))),_,B(nl,w(8),V(3,$(T(6),"&lt;T> ",I("proxyFactory")," = ",n,_,N(1),P(),";")),nl,w(8),V(4,$(T(4),"&lt;T> ",I("mockHandler")," = ",n,_,N(2),P(W(1),", ",W(2),", ",n,_,N(3),P()),";")),nl,w(8),V(5,$(T(5),"&lt;",T(4),"&lt;T>> ",I("filter")," = ",n,_,N(4),P(W(0),", ",W(4)),";")),nl,w(8),r,_,W(3),".",N(5),P(W(0),", ",W(5)),";",nl,w(4)))),nl,w(4),nl,w(4),M(6,[],[],$(pu,_,s," &lt;T> ",T(4),"&lt;T> ",I("getMockHandler"),P(V(6,$("T ",I("mock")))),_,B(nl,w(8),i,_,P(W(6)," == ",L("null")),_,B(nl,w(12),tw,_,n,_,N(7),P(L("\"Argument should be a mock, but is null!\"")),";",nl,w(8)),nl,w(8),nl,w(8),tr,_,B(nl,w(12),i,_,P(T(0),".",N(8),P(W(6),".",N(9),P())),_,B(nl,w(16),r,_,P(P(T(5),"&lt;",T(4),"&lt;T>>"),_,N(10),P(W(6))),".",N(11),P(),";",nl,w(12)),_,e,_,B(nl,w(16),tw,_,n,_,N(7),P(L("\"Argument should be a mock, but is: \"")," + ",W(6),".",N(9),P()),";",nl,w(12)),nl,w(8)),_,ct,_,P(V(7,$(T(14),_,I("e")))),_,B(nl,w(12),tw,_,n,_,N(7),P(L("\"Argument should be a mock, but is: \"")," + ",W(6),".",N(9),P()),";",nl,w(8)),nl,w(4)))),nl,w(4),nl,w(4),M(10,[],[],$("@",T(15),P(L("\"unchecked\"")),nl,w(4),pi,_,s," &lt;T> ",T(5),"&lt;",T(4),"&lt;T>> ",I("getInterceptor"),P(V(8,$("T ",I("mock")))),_,B(nl,w(8),V(9,$(T(1),_,I("factory")," = ",P(T(1)),_,W(8),";")),nl,w(8),r,_,P(T(5)),_,W(9),".",N(12),P(L("0")),";",nl,w(4)))),nl,w(4),nl,w(4),M(13,[],[],$(pu,_,s,_,v,_,I("validateMock"),P(V(10,$(T(13),_,I("mock")))),_,B(nl,w(8),N(6),P(W(10)),";",nl,w(4)))),nl,w(4),nl,w(4),M(14,[],[],$(pu,_,s,_,b,_,I("isMock"),P(V(11,$(T(13),_,I("mock")))),_,B(nl,w(8),tr,_,B(nl,w(12),N(6),P(W(11)),";",nl,w(12),r,_,L("true"),";",nl,w(8)),_,ct,_,P(V(12,$(T(2),_,I("e")))),_,B(nl,w(12),r,_,L("false"),";",nl,w(8)),nl,w(4)))),nl,nl,w(4),M(15,[],[],$(pu,_,s,_,T(11),_,I("getMockName"),P(V(13,$(T(13),_,I("mock")))),_,B(nl,w(8),r,_,N(6),P(W(13)),".",N(16),P(),";",nl,w(4)))),nl))));}});