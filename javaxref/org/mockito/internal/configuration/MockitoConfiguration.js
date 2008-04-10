defineStructure(
"MockitoConfiguration",function(factory){with(factory) { typeTable(["org.mockito.configuration.ReturnValues","it"],["org.mockito.configuration.experimental.ConfigurationSupport","cl"],["org.mockito.internal.configuration.MockitoConfiguration","it"],["org.mockito.internal.configuration.Configuration","cl"]),methodTable([2,"getReturnValues",[],"me"],[3,"getReturnValues",[],"me"],[2,"setReturnValues",[0],"me"],[3,"setReturnValues",[0],"me"],[2,"resetReturnValues",[],"me"],[3,"resetReturnValues",[],"me"]),localVariableTable(["returnValues","setReturnValues(org.mockito.configuration.ReturnValues)-returnValues"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockito.internal.configuration;",nl,nl,ip," org.mockito.configuration.",T(0),";",nl,ip," org.mockito.configuration.experimental.",T(1),";",nl,nl,O("/**",nl," * Allows configuring Mockito.",nl," * &lt;p>",nl," * See examples in javadoc for {@link ConfigurationSupport}",nl," */"),nl,C(2,[3],$(pu,_,it,_,I("MockitoConfiguration"),_,B(nl,nl,w(4),O("/**",nl,w(5),"* returns currently set {@link ReturnValues}",nl,w(5),"* ",nl,w(5),"* @return",nl,w(5),"*/"),nl,w(4),M(0,[],[1],$(T(0),_,I("getReturnValues"),P(),";")),nl,nl,w(4),O("/**",nl,w(5),"* Sets {@link ReturnValues} implementation. ",nl,w(5),"* &lt;p>",nl,w(5),"* Allows to change the values returned by unstubbed methods. ",nl,w(5),"* ",nl,w(5),"* @param returnValues",nl,w(5),"*/"),nl,w(4),M(2,[],[3],$(v,_,I("setReturnValues"),P(V(0,$(T(0),_,I("returnValues")))),";")),nl,nl,w(4),O("/**",nl,w(5),"* Resets {@link ReturnValues} implementation to the default one: {@link MockitoProperties#DEFAULT_RETURN_VALUES}",nl,w(5),"*/"),nl,w(4),M(4,[],[5],$(v,_,I("resetReturnValues"),P(),";")),nl))));}});