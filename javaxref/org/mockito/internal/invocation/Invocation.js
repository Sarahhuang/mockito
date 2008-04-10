defineStructure(
"Invocation",function(factory){with(factory) { typeTable(["java.lang.reflect.Method","cl"],["java.util.ArrayList","cl"],["java.util.Arrays","cl"],["java.util.List","it"],["org.hamcrest.Description","it"],["org.hamcrest.Matcher","it"],["org.hamcrest.StringDescription","cl"],["org.mockito.exceptions.PrintableInvocation","it"],["org.mockito.exceptions.base.HasStackTrace","it"],["org.mockito.exceptions.base.MockitoException","cl"],["org.mockito.internal.matchers.ArrayEquals","cl"],["org.mockito.internal.matchers.Equals","cl"],["org.mockito.internal.util.MockUtil","cl"],["org.mockito.invocation.InvocationOnMock","it"],["org.mockito.internal.invocation.Invocation","cl"],["java.lang.SuppressWarnings","an"],["java.lang.Object","cl"],["java.lang.String","cl"],["java.lang.Class","cl"],["java.lang.System","cl"],["java.lang.Integer","cl"],["java.lang.RuntimeException","cl"],["java.lang.Iterable","it"]),methodTable([14,"Invocation",[16,0,"java.lang.Object[]","int"],"co"],[14,"expandVarArgs",["boolean","java.lang.Object[]"],"st me"],[0,"isVarArgs",[],"me"],[9,"MockitoException",[17],"co"],[16,"getClass",[],"me"],[18,"isArray",[],"me"],[10,"createObjectArray",[16],"st me"],[19,"arraycopy",[16,"int",16,"int","int"],"st me"],[14,"getMock",[],"me"],[13,"getMock",[],"me"],[14,"getMethod",[],"me"],[13,"getMethod",[],"me"],[14,"getArguments",[],"me"],[13,"getArguments",[],"me"],[14,"markVerified",[],"me"],[14,"isVerified",[],"me"],[14,"getSequenceNumber",[],"me"],[14,"markVerifiedInOrder",[],"me"],[14,"isVerifiedInOrder",[],"me"],[14,"getStackTrace",[],"me"],[14,"equals",[16],"me"],[16,"equals",[16],"me"],[0,"equals",[16],"me"],[14,"equalArguments",["java.lang.Object[]"],"me"],[2,"equals",["java.lang.Object[]","java.lang.Object[]"],"st me"],[14,"hashCode",[],"me"],[16,"hashCode",[],"me"],[21,"RuntimeException",[17],"co"],[14,"toString",[],"me"],[7,"toString",[],"me"],[14,"toString",[3],"me"],[14,"argumentsToMatchers",[],"me"],[14,"qualifiedMethodName",[],"me"],[14,"getArgumentsLine",[3],"me"],[17,"length",[],"me"],[14,"getArgumentsBlock",[3],"me"],[12,"getMockName",[16],"st me"],[0,"getName",[],"me"],[6,"StringDescription",[],"co"],[4,"appendList",[17,17,17,22],"me"],[16,"toString",[],"me"],[1,"ArrayList",["int"],"co"],[3,"add",[16],"me"],[10,"ArrayEquals",[16],"co"],[11,"Equals",[16],"co"],[14,"isToString",[13],"st me"],[0,"getReturnType",[],"me"],[0,"getParameterTypes",[],"me"],[17,"equals",[16],"me"]),localVariableTable(["mock","<init>(java.lang.Object,java.lang.reflect.Method,java.lang.Object[],int)-mock"],["method","<init>(java.lang.Object,java.lang.reflect.Method,java.lang.Object[],int)-method"],["args","<init>(java.lang.Object,java.lang.reflect.Method,java.lang.Object[],int)-args"],["args","expandVarArgs(boolean,java.lang.Object[])-args"],["varArgs","expandVarArgs(boolean,java.lang.Object[])-varArgs"],["newArgs","expandVarArgs(boolean,java.lang.Object[])-newArgs"],["o","equals(java.lang.Object)-o"],["other","equals(java.lang.Object)-other"],["arguments","equalArguments(java.lang.Object[])-arguments"],["matchers","toString(java.util.List)-matchers"],["method","toString(java.util.List)-method"],["invocation","toString(java.util.List)-invocation"],["matchers","getArgumentsLine(java.util.List)-matchers"],["result","getArgumentsLine(java.util.List)-result"],["matchers","getArgumentsBlock(java.util.List)-matchers"],["result","getArgumentsBlock(java.util.List)-result"],["matchers","argumentsToMatchers()-matchers"],["arg","argumentsToMatchers()-arg"],["invocation","isToString(org.mockito.invocation.InvocationOnMock)-invocation"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockito.internal.invocation;",nl,nl,ip," java.lang.reflect.",T(0),";",nl,ip," java.util.",T(1),";",nl,ip," java.util.",T(2),";",nl,ip," java.util.",T(3),";",nl,nl,ip," org.hamcrest.",T(4),";",nl,ip," org.hamcrest.",T(5),";",nl,ip," org.hamcrest.",T(6),";",nl,ip," org.mockito.exceptions.",T(7),";",nl,ip," org.mockito.exceptions.base.",T(8),";",nl,ip," org.mockito.exceptions.base.",T(9),";",nl,ip," org.mockito.internal.matchers.",T(10),";",nl,ip," org.mockito.internal.matchers.",T(11),";",nl,ip," org.mockito.internal.util.",T(12),";",nl,ip," org.mockito.invocation.",T(13),";",nl,nl,O("/**",nl," * Method call on a mock object. ",nl," * &lt;p>",nl," * Contains sequence number which should be",nl," * globally unique and is used for verification in order.",nl," * &lt;p>",nl," * Contains stack trace of invocation",nl," */"),nl,C(14,[],$("@",T(15),P(L("\"unchecked\"")),nl,pu,_,c,_,I("Invocation"),_,im,_,T(7),", ",T(13),_,B(nl,nl,w(4),pi,_,s,_,f,_,j," MAX_LINE_LENGTH = ",L("45"),";",nl,w(4),pi,_,f,_,j," sequenceNumber;",nl,w(4),F(pi,_,f,_,T(16),_,I("mock"),";"),nl,w(4),F(pi,_,f,_,T(0),_,I("method"),";"),nl,w(4),F(pi,_,f,_,T(16),"[] ",I("arguments"),";"),nl,w(4),F(pi,_,f,_,T(8),_,I("stackTrace"),";"),nl,nl,w(4),pi,_,b," verified;",nl,w(4),pi,_,b," verifiedInOrder;",nl,nl,w(4),M(0,[],[],$(pu," Invocation",P(V(0,$(T(16),_,I("mock"))),", ",V(1,$(T(0),_,I("method"))),", ",V(2,$(T(16),"[] ",I("args"))),", ",j," sequenceNumber"),_,B(nl,w(8),t,".",G(14,"fi","mock")," = ",W(0),";",nl,w(8),t,".",G(14,"fi","method")," = ",W(1),";",nl,w(8),t,".",G(14,"fi","arguments")," = ",N(1),P(W(1),".",N(2),P(),", ",W(2)),";",nl,w(8),t,".sequenceNumber = sequenceNumber;",nl,w(8),t,".",G(14,"fi","stackTrace")," = ",n,_,N(3),P(L("\"\"")),";",nl,w(4)))),nl,nl,w(4),M(1,[],[],$(pi,_,s,_,T(16),"[] ",I("expandVarArgs"),P(f,_,b," isVarArgs,",nl,w(12),V(3,$(f,_,T(16),"[] ",I("args")))),_,B(nl,w(8),i,_,P("!isVarArgs || isVarArgs &amp;&amp; ",W(3),"[",W(3),".length - ",L("1"),"] != ",L("null"),nl,w(16),"&amp;&amp; !",W(3),"[",W(3),".length - ",L("1"),"].",N(4),P(),".",N(5),P()),_,B(nl,w(12),r,_,W(3)," == ",L("null")," ? ",n,_,T(16),"[",L("0"),"] : ",W(3),";",nl,w(8)),nl,w(8),V(4,$(T(16),"[] ",I("varArgs")," = ",T(10),".",N(6),P(W(3),"[",W(3),".length - ",L("1"),"]"),";")),nl,w(8),f,_,j," nonVarArgsCount = ",W(3),".length - ",L("1"),";",nl,w(8),f,_,j," varArgsCount = ",W(4),".length;",nl,w(8),V(5,$(T(16),"[] ",I("newArgs")," = ",n,_,T(16),"[nonVarArgsCount + varArgsCount];")),nl,w(8),T(19),".",N(7),P(W(3),", ",L("0"),", ",W(5),", ",L("0"),", nonVarArgsCount"),";",nl,w(8),T(19),".",N(7),P(W(4),", ",L("0"),", ",W(5),", nonVarArgsCount, varArgsCount"),";",nl,w(8),r,_,W(5),";",nl,w(4)))),nl,nl,w(4),M(8,[9],[],$(pu,_,T(16),_,I("getMock"),P(),_,B(nl,w(8),r,_,G(14,"fi","mock"),";",nl,w(4)))),nl,nl,w(4),M(10,[11],[],$(pu,_,T(0),_,I("getMethod"),P(),_,B(nl,w(8),r,_,G(14,"fi","method"),";",nl,w(4)))),nl,nl,w(4),M(12,[13],[],$(pu,_,T(16),"[] ",I("getArguments"),P(),_,B(nl,w(8),r,_,G(14,"fi","arguments"),";",nl,w(4)))),nl,nl,w(4),M(14,[],[],$(pu,_,v,_,I("markVerified"),P(),_,B(nl,w(8),"verified = ",L("true"),";",nl,w(4)))),nl,nl,w(4),M(15,[],[],$(pu,_,b,_,I("isVerified"),P(),_,B(nl,w(8),r," verified;",nl,w(4)))),nl,w(4),nl,w(4),M(16,[],[],$(pu,_,T(20),_,I("getSequenceNumber"),P(),_,B(nl,w(8),r," sequenceNumber;",nl,w(4)))),nl,nl,w(4),M(17,[],[],$(pu,_,v,_,I("markVerifiedInOrder"),P(),_,B(nl,w(8),t,".",N(14),P(),";",nl,w(8),t,".verifiedInOrder = ",L("true"),";",nl,w(4)))),nl,nl,w(4),M(18,[],[],$(pu,_,b,_,I("isVerifiedInOrder"),P(),_,B(nl,w(8),r," verifiedInOrder;",nl,w(4)))),nl,w(4),nl,w(4),M(19,[],[],$(pu,_,T(8),_,I("getStackTrace"),P(),_,B(nl,w(8),r,_,G(14,"fi","stackTrace"),";",nl,w(4)))),nl,nl,w(4),M(20,[21],[],$(pu,_,b,_,I("equals"),P(V(6,$(T(16),_,I("o")))),_,B(nl,w(8),i,_,P(W(6)," == ",L("null")," || !",W(6),".",N(4),P(),".",N(21),P(t,".",N(4),P())),_,B(nl,w(12),r,_,L("false"),";",nl,w(8)),nl,nl,w(8),V(7,$(T(14),_,I("other")," = ",P(T(14)),_,W(6),";")),nl,nl,w(8),r,_,t,".",G(14,"fi","mock"),".",N(21),P(W(7),".",G(14,"fi","mock"))," &amp;&amp; ",t,".",G(14,"fi","method"),".",N(22),P(W(7),".",G(14,"fi","method")),nl,w(16),"&amp;&amp; ",t,".",N(23),P(W(7),".",G(14,"fi","arguments")),";",nl,w(4)))),nl,nl,w(4),M(23,[],[],$(pi,_,b,_,I("equalArguments"),P(V(8,$(T(16),"[] ",I("arguments")))),_,B(nl,w(8),r,_,T(2),".",N(24),P(W(8),", ",t,".",G(14,"fi","arguments")),";",nl,w(4)))),nl,nl,w(4),M(25,[26],[],$(pu,_,j,_,I("hashCode"),P(),_,B(nl,w(8),tw,_,n,_,N(27),P(L("\"hashCode() is not implemented\"")),";",nl,w(4)))),nl,w(4),nl,w(4),M(28,[29],[],$(pu,_,T(17),_,I("toString"),P(),_,B(nl,w(8),r,_,N(30),P(N(31),P()),";",nl,w(4)))),nl,nl,w(4),M(30,[],[],$(po,_,T(17),_,I("toString"),P(V(9,$(T(3),"&lt;",T(5),"> ",I("matchers")))),_,B(nl,w(8),V(10,$(T(17),_,I("method")," = ",N(32),P(),";")),nl,w(8),V(11,$(T(17),_,I("invocation")," = ",W(10)," + ",N(33),P(W(9)),";")),nl,w(8),i,_,P(W(11),".",N(34),P()," &lt;= MAX_LINE_LENGTH"),_,B(nl,w(12),r,_,W(11),";",nl,w(8)),_,e,_,B(nl,w(12),r,_,W(10)," + ",N(35),P(W(9)),";",nl,w(8)),nl,w(4)))),nl,nl,w(4),M(32,[],[],$(pi,_,T(17),_,I("qualifiedMethodName"),P(),_,B(nl,w(8),r,_,T(12),".",N(36),P(G(14,"fi","mock"))," + ",L("\".\"")," + ",G(14,"fi","method"),".",N(37),P(),";",nl,w(4)))),nl,nl,w(4),M(33,[],[],$(pi,_,T(17),_,I("getArgumentsLine"),P(V(12,$(T(3),"&lt;",T(5),"> ",I("matchers")))),_,B(nl,w(8),V(13,$(T(4),_,I("result")," = ",n,_,N(38),P(),";")),nl,w(8),W(13),".",N(39),P(L("\"(\""),", ",L("\", \""),", ",L("\");\""),", ",W(12)),";",nl,w(8),r,_,W(13),".",N(40),P(),";",nl,w(4)))),nl,w(4),nl,w(4),M(35,[],[],$(pi,_,T(17),_,I("getArgumentsBlock"),P(V(14,$(T(3),"&lt;",T(5),"> ",I("matchers")))),_,B(nl,w(8),V(15,$(T(4),_,I("result")," = ",n,_,N(38),P(),";")),nl,w(8),W(15),".",N(39),P(L("\"(\\n",w(4),"\""),", ",L("\",\\n",w(4),"\""),", ",L("\"\\n);\""),", ",W(14)),";",nl,w(8),r,_,W(15),".",N(40),P(),";",nl,w(4)))),nl,w(4),nl,w(4),M(31,[],[],$(po,_,T(3),"&lt;",T(5),"> ",I("argumentsToMatchers"),P(),_,B(nl,w(8),V(16,$(T(3),"&lt;",T(5),"> ",I("matchers")," = ",n,_,N(41),P(G(14,"fi","arguments"),".length"),";")),nl,w(8),fo,_,P(V(17,$(T(16),_,I("arg")))," : ",G(14,"fi","arguments")),_,B(nl,w(12),i,_,P(W(17)," != ",L("null")," &amp;&amp; ",W(17),".",N(4),P(),".",N(5),P()),_,B(nl,w(16),W(16),".",N(42),P(n,_,N(43),P(W(17))),";",nl,w(12)),_,e,_,B(nl,w(16),W(16),".",N(42),P(n,_,N(44),P(W(17))),";",nl,w(12)),nl,w(8)),nl,w(8),r,_,W(16),";",nl,w(4)))),nl,nl,w(4),M(45,[],[],$(pu,_,s,_,b,_,I("isToString"),P(V(18,$(T(13),_,I("invocation")))),_,B(nl,w(8),r,_,W(18),".",N(11),P(),".",N(46),P()," == ",T(17),".",c," ",nl,w(12),"&amp;&amp; ",W(18),".",N(11),P(),".",N(47),P(),".length == ",L("0")," ",nl,w(12),"&amp;&amp; ",W(18),".",N(11),P(),".",N(37),P(),".",N(48),P(L("\"toString\"")),";",nl,w(4)))),nl))));}});