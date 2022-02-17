"use strict";(self.webpackChunkasync_storage_website=self.webpackChunkasync_storage_website||[]).push([[586],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9210:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.platformIcon,n=e.title;return a.createElement("div",{style:{display:"flex",margin:"10px 20px",alignItems:"center",flexDirection:"row"}},a.createElement("img",{style:{width:34,height:34},src:"/async-storage/img/"+t}),a.createElement("p",{style:{margin:"0 0 0 10px",padding:0}},n))}},6843:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return g}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(9210),i=["components"],s={id:"brownfield",title:"Brownfield integration",sidebar_label:"Brownfield integration"},c=void 0,u={unversionedId:"advanced/brownfield",id:"advanced/brownfield",title:"Brownfield integration",description:"Supported platforms:",source:"@site/docs/advanced/BrownfieldIntegration.md",sourceDirName:"advanced",slug:"/advanced/brownfield",permalink:"/async-storage/docs/advanced/brownfield",editUrl:"https://github.com/react-native-async-storage/async-storage/edit/master/website/docs/advanced/BrownfieldIntegration.md",tags:[],version:"current",frontMatter:{id:"brownfield",title:"Brownfield integration",sidebar_label:"Brownfield integration"},sidebar:"docs",previous:{title:"Jest integration",permalink:"/async-storage/docs/advanced/jest"},next:{title:"iCloud backup",permalink:"/async-storage/docs/advanced/backup"}},d=[{value:"The procotol",id:"the-procotol",children:[{value:"allKeys",id:"allkeys",children:[],level:3},{value:"mergeValues",id:"mergevalues",children:[],level:3},{value:"removeAllValues",id:"removeallvalues",children:[],level:3},{value:"removeValuesForKeys",id:"removevaluesforkeys",children:[],level:3},{value:"setValues",id:"setvalues",children:[],level:3},{value:"valuesForKeys",id:"valuesforkeys",children:[],level:3},{value:"passthrough",id:"passthrough",children:[],level:3}],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Access storage",id:"access-storage",children:[{value:"Kotlin (recommended)",id:"kotlin-recommended",children:[{value:"Reading value",id:"reading-value",children:[],level:4},{value:"Saving value",id:"saving-value",children:[],level:4}],level:3},{value:"Java",id:"java",children:[{value:"Reading from storage",id:"reading-from-storage",children:[],level:4},{value:"Saving to storage",id:"saving-to-storage",children:[],level:4}],level:3}],level:2}],p={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Supported platforms:")),(0,o.kt)(l.Z,{title:"iOS/MacOS",platformIcon:"icon_ios.svg",mdxType:"PlatformSupport"}),(0,o.kt)(l.Z,{title:"Android",platformIcon:"icon_android.svg",mdxType:"PlatformSupport"}),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"ios"},"iOS"),(0,o.kt)("p",null,"If you're embedding React Native into native application, you can also integrate\nAsync Storage module, so that both worlds will use one storage solution."),(0,o.kt)("p",null,"AsyncStorage can be controlled by the hosting app via the delegate on\n",(0,o.kt)("inlineCode",{parentName:"p"},"RNCAsyncStorage"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"RNCAsyncStorage *asyncStorage = [bridge moduleForClass:[RNCAsyncStorage class]];\nasyncStorage.delegate = self;\n")),(0,o.kt)("h2",{id:"the-procotol"},"The procotol"),(0,o.kt)("p",null,"The delegate must conform to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RNCAsyncStorageDelegate")," protocol:"),(0,o.kt)("h3",{id:"allkeys"},"allKeys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"- (void)allKeys:(RNCAsyncStorageResultCallback)block;\n")),(0,o.kt)("p",null,"Returns all keys currently stored. If none, an empty array is returned.\nCalled by ",(0,o.kt)("inlineCode",{parentName:"p"},"getAllKeys")," in JS."),(0,o.kt)("h3",{id:"mergevalues"},"mergeValues"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"- (void)mergeValues:(NSArray<NSString *> *)values\n            forKeys:(NSArray<NSString *> *)keys\n         completion:(RNCAsyncStorageResultCallback)block;\n")),(0,o.kt)("p",null,"Merges values with the corresponding values stored at specified keys.\nCalled by ",(0,o.kt)("inlineCode",{parentName:"p"},"mergeItem")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"multiMerge")," in JS."),(0,o.kt)("h3",{id:"removeallvalues"},"removeAllValues"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"- (void)removeAllValues:(RNCAsyncStorageCompletion)block;\n")),(0,o.kt)("p",null,"Removes all values from the store. Called by ",(0,o.kt)("inlineCode",{parentName:"p"},"clear")," in JS."),(0,o.kt)("h3",{id:"removevaluesforkeys"},"removeValuesForKeys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"- (void)removeValuesForKeys:(NSArray<NSString *> *)keys\n                 completion:(RNCAsyncStorageResultCallback)block;\n")),(0,o.kt)("p",null,"Removes all values associated with specified keys.\nCalled by ",(0,o.kt)("inlineCode",{parentName:"p"},"removeItem")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"multiRemove")," in JS."),(0,o.kt)("h3",{id:"setvalues"},"setValues"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"- (void)setValues:(NSArray<NSString *> *)values\n          forKeys:(NSArray<NSString *> *)keys\n       completion:(RNCAsyncStorageResultCallback)block;\n")),(0,o.kt)("p",null,"Sets specified key-value pairs. Called by ",(0,o.kt)("inlineCode",{parentName:"p"},"setItem")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"multiSet")," in JS."),(0,o.kt)("h3",{id:"valuesforkeys"},"valuesForKeys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"- (void)valuesForKeys:(NSArray<NSString *> *)keys\n           completion:(RNCAsyncStorageResultCallback)block;\n")),(0,o.kt)("p",null,"Returns values associated with specified keys.\nCalled by ",(0,o.kt)("inlineCode",{parentName:"p"},"getItem")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"multiGet")," in JS."),(0,o.kt)("h3",{id:"passthrough"},"passthrough"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"@optional\n@property (nonatomic, readonly, getter=isPassthrough) BOOL passthrough;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional:")," Returns whether the delegate should be treated as a passthrough.\nThis is useful for monitoring storage usage among other things. Returns ",(0,o.kt)("inlineCode",{parentName:"p"},"NO")," by\ndefault."),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"android"},"Android"),(0,o.kt)("p",null,"The recommended approach here is to use Kotlin language to leverage coroutines when accessing the storage.\nJava is also supported (through Kotlin interop), but the approach is more cumbersome."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/async-storage/docs/advanced/next"},"Next storage feature")," enabled."),(0,o.kt)("li",{parentName:"ol"},"Add dependency on ",(0,o.kt)("inlineCode",{parentName:"li"},"coroutines-android")," in your app's ",(0,o.kt)("inlineCode",{parentName:"li"},"build.gradle"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'\ndependencies {\n  // other dependencies\n\n\n  // will work with coroutines 1.3.0 and up\n+ implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:1.3.9"\n\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Your library of choice for parsing JSON storage values (since there are strings only)")),(0,o.kt)("h2",{id:"access-storage"},"Access storage"),(0,o.kt)("h3",{id:"kotlin-recommended"},"Kotlin (recommended)"),(0,o.kt)("p",null,"We use Coroutines to handle asynchronous code. Each method on storage is ",(0,o.kt)("inlineCode",{parentName:"p"},"suspend")," method, so you need to\ncall it from within a coroutine."),(0,o.kt)("h4",{id:"reading-value"},"Reading value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"suspend fun readValue(ctx: Context, keys: List<String>) {\n    // get instance of the Storage by providing context object\n    val asyncStorage = StorageModule.getStorageInstance(ctx)\n\n    val entries: List<Entry> = asyncStorage.getValues(keys)\n    doSomethingWithValues(entries)\n}\n")),(0,o.kt)("h4",{id:"saving-value"},"Saving value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'suspend fun saveValue(ctx: Context) {\n    val asyncStorage = StorageModule.getStorageInstance(ctx)\n\n    val entries = listOf(\n        Entry("myKey", "myValue")\n    )\n    asyncStorage.setValues(entries)\n}\n')),(0,o.kt)("h3",{id:"java"},"Java"),(0,o.kt)("p",null,"You can access AsyncStorage form Java, but you're still required to add Kotlin dependencies.\nThere's no one way of accessing the data and there's more than one way to parse it."),(0,o.kt)("h4",{id:"reading-from-storage"},"Reading from storage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"void readStorageValue(Context ctx, String key) {\n    AsyncStorageAccess asyncStorage = StorageModule.getStorageInstance(ctx);\n\n    BuildersKt.launch(GlobalScope.INSTANCE,\n                Dispatchers.getIO(),\n                CoroutineStart.DEFAULT,\n                (scope, continuation) -> {\n                    List<String> keys = new ArrayList<>();\n                    keys.add(key);\n\n                    Continuation<? super List<? extends Entry>> cont = new Continuation() {\n                        @NotNull\n                        @Override\n                        public CoroutineContext getContext() {\n                            return scope.getCoroutineContext();\n                        }\n\n                        @Override\n                        public void resumeWith(@NotNull Object o) {\n                            List<Entry> entries = (List<Entry>) o;\n                            doSomethingWithEntries(entries);\n                        }\n                    };\n\n                    asyncStorage.getValues(keys, cont);\n                    return Unit.INSTANCE;\n                });\n\n}\n")),(0,o.kt)("h4",{id:"saving-to-storage"},"Saving to storage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"void saveStorageValue(Context ctx, String key, String value) {\n  AsyncStorageAccess asyncStorage = StorageModule.getStorageInstance(ctx);\n\n  BuildersKt.launch(GlobalScope.INSTANCE,\n                Dispatchers.getIO(),\n                CoroutineStart.DEFAULT,\n                (scope, continuation) -> {\n                    Continuation cont = new Continuation() {\n                        @NotNull\n                        @Override\n                        public CoroutineContext getContext() {\n                            return scope.getCoroutineContext();\n                        }\n\n                        @Override\n                        public void resumeWith(@NotNull Object o) {}\n                    };\n\n                    List<Entry> entries = new ArrayList<>();\n                    Entry entry = new Entry(key, value);\n                    entries.add(entry);\n                    asyncStorage.setValues(entries, cont);\n                    return Unit.INSTANCE;\n                });\n}\n")))}g.isMDXComponent=!0}}]);