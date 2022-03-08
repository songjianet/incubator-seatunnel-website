"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7399],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6436:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return h},default:function(){return p}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={title:"Participate in Contributing",sidebar_position:1},l=void 0,u={unversionedId:"contribution_guide/contribute",id:"contribution_guide/contribute",title:"Participate in Contributing",description:"This guide documents the best way to make various types of contribution to Apache SeaTunnel,",source:"@site/community/contribution_guide/contribute.md",sourceDirName:"contribution_guide",slug:"/contribution_guide/contribute",permalink:"/community/contribution_guide/contribute",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/dev/community/contribution_guide/contribute.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Participate in Contributing",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Subscribe Mailing Lists",permalink:"/community/contribution_guide/subscribe"}},c={},h=[{value:"Contributing by helping other users",id:"contributing-by-helping-other-users",level:2},{value:"Contributing by testing releases",id:"contributing-by-testing-releases",level:2},{value:"Contributing by reviewing changes",id:"contributing-by-reviewing-changes",level:2},{value:"Contributing documentation changes",id:"contributing-documentation-changes",level:2},{value:"Contributing bug reports",id:"contributing-bug-reports",level:2},{value:"Contributing to ISSUE maintenance",id:"contributing-to-issue-maintenance",level:2},{value:"Preparing to contribute code changes",id:"preparing-to-contribute-code-changes",level:2},{value:"Choosing what to contribute",id:"choosing-what-to-contribute",level:3},{value:"Error message guidelines",id:"error-message-guidelines",level:3},{value:"Code review criteria",id:"code-review-criteria",level:3},{value:"Positives",id:"positives",level:4},{value:"Negatives, risks",id:"negatives-risks",level:4},{value:"Contributing code changes",id:"contributing-code-changes",level:2},{value:'Cloning the Apache SeaTunnel<span class="tm">\u2122</span> source code',id:"cloning-the-apache-seatunnel-source-code",level:3},{value:"ISSUE",id:"issue",level:3},{value:"Pull request",id:"pull-request",level:3},{value:"The review process",id:"the-review-process",level:3},{value:"Closing your pull request / ISSUE",id:"closing-your-pull-request--issue",level:3},{value:"If in doubt",id:"if-in-doubt",level:3},{value:"Code of conduct",id:"code-of-conduct",level:2}],d={toc:h};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide documents the best way to make various types of contribution to Apache SeaTunnel,\nincluding what is required before submitting a code change."),(0,o.kt)("p",null,"Contributing to SeaTunnel doesn't just mean writing code. Helping new users on the mailing list,\ntesting releases, and improving documentation are also welcome. In fact, proposing significant\ncode changes usually requires first gaining experience and credibility within the community by\nhelping in other ways. This is also a guide to becoming an effective contributor."),(0,o.kt)("p",null,"So, this guide organizes contributions in order that they should probably be considered by new\ncontributors who intend to get involved long-term. Build some track record of helping others,\nrather than just open pull requests."),(0,o.kt)("h2",{id:"contributing-by-helping-other-users"},"Contributing by helping other users"),(0,o.kt)("p",null,"A great way to contribute to SeaTunnel is to help answer user questions on the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev@seatunnel.apache.org"),"\nmailing list or on StackOverflow. There are always many new SeaTunnel users; taking a few minutes to\nhelp answer a question is a very valuable community service."),(0,o.kt)("p",null,"Contributors should subscribe to this list and follow it in order to keep up to date on what's\nhappening in SeaTunnel. Answering questions is an excellent and visible way to help the community,\nwhich also demonstrates your expertise."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@seatunnel.apache.org"},"Mailing Lists guide")," for guidelines\nabout how to effectively participate in discussions on the mailing list, as well as forums\nlike ISSUE."),(0,o.kt)("h2",{id:"contributing-by-testing-releases"},"Contributing by testing releases"),(0,o.kt)("p",null,"SeaTunnel's release process is community-oriented, and members of the community can vote on new\nreleases on the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev@seatunnel.apache.org")," mailing list. SeaTunnel users are invited to subscribe to\nthis list to receive announcements, and test their workloads on newer release and provide\nfeedback on any performance or correctness issues found in the newer release."),(0,o.kt)("h2",{id:"contributing-by-reviewing-changes"},"Contributing by reviewing changes"),(0,o.kt)("p",null,"Changes to SeaTunnel source code are proposed, reviewed and committed via\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/pulls"},"GitHub pull requests ")," (described later).\nAnyone can view and comment on active changes here.\nReviewing others' changes is a good way to learn how the change process works and gain exposure\nto activity in various parts of the code. You can help by reviewing the changes and asking\nquestions or pointing out issues -- as simple as typos or small issues of style."),(0,o.kt)("h2",{id:"contributing-documentation-changes"},"Contributing documentation changes"),(0,o.kt)("p",null,"To propose a change to ",(0,o.kt)("em",{parentName:"p"},"release")," documentation (that is, docs that appear under\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/tree/dev/docs"},"docs"),"\nedit the Markdown source files in SeaTunnel's\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/tree/dev/docs"},"docs")," directory,\nwhose ",(0,o.kt)("inlineCode",{parentName:"p"},"README")," file shows how to build the documentation locally to test your changes.\nThe process to propose a doc change is otherwise the same as the process for proposing code\nchanges below."),(0,o.kt)("p",null,"To propose a change to the rest of the documentation (that is, docs that do ",(0,o.kt)("em",{parentName:"p"},"not")," appear under\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/tree/dev/docs"},"docs")," , similarly, edit the Markdown in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel-website"},"website")," and open a pull request."),(0,o.kt)("h2",{id:"contributing-bug-reports"},"Contributing bug reports"),(0,o.kt)("p",null,"Ideally, bug reports are accompanied by a proposed code change to fix the bug. This isn't\nalways possible, as those who discover a bug may not have the experience to fix it. A bug\nmay be reported by creating a ISSUE but without creating a pull request (see below)."),(0,o.kt)("p",null,"Bug reports are only useful however if they include enough information to understand, isolate\nand ideally reproduce the bug. Simply encountering an error does not mean a bug should be\nreported; as below, search ISSUE and search and inquire on the SeaTunnel user / dev mailing lists\nfirst. Unreproducible bugs, or simple error reports, may be closed."),(0,o.kt)("p",null,"It's very helpful if the bug report has a description about how the bug was introduced, by\nwhich commit, so that reviewers can easily understand the bug. It also helps committers to\ndecide how far the bug fix should be backported, when the pull request is merged. The pull\nrequest to fix the bug should narrow down the problem to the root cause."),(0,o.kt)("p",null,"Performance regression is also one kind of bug. The pull request to fix a performance regression\nmust provide a benchmark to prove the problem is indeed fixed."),(0,o.kt)("p",null,"Note that, data correctness/data loss bugs are very serious. Make sure the corresponding bug\nreport ISSUE ticket is labeled as ",(0,o.kt)("inlineCode",{parentName:"p"},"correctness")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"data-loss"),". If the bug report doesn't get\nenough attention, please send an email to ",(0,o.kt)("inlineCode",{parentName:"p"},"dev@seatunnel.apache.org"),", to draw more attentions."),(0,o.kt)("p",null,"It is possible to propose new features as well. These are generally not helpful unless\naccompanied by detail, such as a design document and/or code change. Large new contributions\nshould consider be discussed on the mailing list first.\nFeature requests may be rejected, or closed after a long period of inactivity."),(0,o.kt)("h2",{id:"contributing-to-issue-maintenance"},"Contributing to ISSUE maintenance"),(0,o.kt)("p",null,"Given the sheer volume of issues raised in the Apache SeaTunnel ISSUE, inevitably some issues are\nduplicates, or become obsolete and eventually fixed otherwise, or can't be reproduced, or could\nbenefit from more detail, and so on. It's useful to help identify these issues and resolve them,\neither by advancing the discussion or even resolving the ISSUE. Most contributors are able to\ndirectly resolve ISSUEs. Use judgment in determining whether you are quite confident the issue\nshould be resolved, although changes can be easily undone. If in doubt, just leave a comment\non the ISSUE."),(0,o.kt)("p",null,"When resolving ISSUEs, observe a few useful conventions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resolve as ",(0,o.kt)("strong",{parentName:"li"},"Fixed")," if there's a change you can point to that resolved the issue",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set Fix Version(s), if and only if the resolution is Fixed"),(0,o.kt)("li",{parentName:"ul"},"Set Assignee to the person who most contributed to the resolution, which is usually the person\nwho opened the PR that resolved the issue."),(0,o.kt)("li",{parentName:"ul"},"In case several people contributed, prefer to assign to the more 'junior', non-committer contributor"))),(0,o.kt)("li",{parentName:"ul"},"For issues that can't be reproduced against master as reported, resolve as ",(0,o.kt)("strong",{parentName:"li"},"Cannot Reproduce"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Fixed is reasonable too, if it's clear what other previous pull request resolved it. Link to it."))),(0,o.kt)("li",{parentName:"ul"},"If the issue is the same as or a subset of another issue, resolved as ",(0,o.kt)("strong",{parentName:"li"},"Duplicate"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Make sure to link to the ISSUE it duplicates"),(0,o.kt)("li",{parentName:"ul"},"Prefer to resolve the issue that has less activity or discussion as the duplicate"))),(0,o.kt)("li",{parentName:"ul"},"If the issue seems clearly obsolete and applies to issues or components that have changed\nradically since it was opened, resolve as ",(0,o.kt)("strong",{parentName:"li"},"Not a Problem")),(0,o.kt)("li",{parentName:"ul"},"If the issue doesn't make sense \u2013 not actionable, for example, a non-SeaTunnel issue, resolve\nas ",(0,o.kt)("strong",{parentName:"li"},"Invalid")),(0,o.kt)("li",{parentName:"ul"},"If it's a coherent issue, but there is a clear indication that there is not support or interest\nin acting on it, then resolve as ",(0,o.kt)("strong",{parentName:"li"},"Won't Fix")),(0,o.kt)("li",{parentName:"ul"},"Umbrellas are frequently marked ",(0,o.kt)("strong",{parentName:"li"},"Done")," if they are just container issues that don't correspond\nto an actionable change of their own")),(0,o.kt)("h2",{id:"preparing-to-contribute-code-changes"},"Preparing to contribute code changes"),(0,o.kt)("h3",{id:"choosing-what-to-contribute"},"Choosing what to contribute"),(0,o.kt)("p",null,"Review can take hours or days of committer time. Everyone benefits if contributors focus on\nchanges that are useful, clear, easy to evaluate, and already pass basic checks."),(0,o.kt)("p",null,"Sometimes, a contributor will already have a particular new change or bug in mind. If seeking\nideas, consult the list of starter tasks in ISSUE, or ask the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev@seatunnel.apache.org")," mailing list."),(0,o.kt)("p",null,"Before proceeding, contributors should evaluate if the proposed change is likely to be relevant,\nnew and actionable:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Is it clear that code must change? Proposing a ISSUE and pull request is appropriate only when a\nclear problem or change has been identified. If simply having trouble using SeaTunnel, use the mailing\nlists first, rather than consider filing a ISSUE or proposing a change. When in doubt, email\n",(0,o.kt)("inlineCode",{parentName:"li"},"dev@seatunnel.apache.org")," first about the possible change"),(0,o.kt)("li",{parentName:"ul"},"Search the ",(0,o.kt)("inlineCode",{parentName:"li"},"dev@seatunnel.apache.org")," mailing list for\nrelated discussions.\nOften, the problem has been discussed before, with a resolution that doesn't require a code\nchange, or recording what kinds of changes will not be accepted as a resolution."),(0,o.kt)("li",{parentName:"ul"},"Search ISSUE for existing issues:\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/issues"},"ISSUES")),(0,o.kt)("li",{parentName:"ul"},"Type ",(0,o.kt)("inlineCode",{parentName:"li"},"SeaTunnel [search terms]")," at the top right search box. If a logically similar issue already\nexists, then contribute to the discussion on the existing ISSUE and pull request first, instead of\ncreating a new one."),(0,o.kt)("li",{parentName:"ul"},"Is the scope of the change matched to the contributor's level of experience? Anyone is qualified\nto suggest a typo fix, but refactoring core scheduling logic requires much more understanding of\nSeaTunnel. Some changes require building up experience first (see above).")),(0,o.kt)("p",null,"It's worth reemphasizing that changes to the core of SeaTunnel, or to highly complex and important modules are more difficult to make correctly. They will be subjected to more scrutiny\nand held to a higher standard of review than changes to less critical code."),(0,o.kt)("h3",{id:"error-message-guidelines"},"Error message guidelines"),(0,o.kt)("p",null,"Exceptions thrown in SeaTunnel should be associated with standardized and actionable\nerror messages."),(0,o.kt)("p",null,"Error messages should answer the following questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"What")," was the problem?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Why")," did the problem happen?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"How")," can the problem be solved?")),(0,o.kt)("p",null,"When writing error messages, you should:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use active voice"),(0,o.kt)("li",{parentName:"ul"},"Avoid time-based statements, such as promises of future support"),(0,o.kt)("li",{parentName:"ul"},"Use the present tense to describe the error and provide suggestions"),(0,o.kt)("li",{parentName:"ul"},"Provide concrete examples if the resolution is unclear"),(0,o.kt)("li",{parentName:"ul"},"Avoid sounding accusatory, judgmental, or insulting"),(0,o.kt)("li",{parentName:"ul"},"Be direct"),(0,o.kt)("li",{parentName:"ul"},"Do not use programming jargon in user-facing errors")),(0,o.kt)("h3",{id:"code-review-criteria"},"Code review criteria"),(0,o.kt)("p",null,"Before considering how to contribute code, it's useful to understand how code is reviewed,\nand why changes may be rejected. See the\n",(0,o.kt)("a",{parentName:"p",href:"https://google.github.io/eng-practices/review/"},"detailed guide for code reviewers"),"\nfrom Google's Engineering Practices documentation.\nSimply put, changes that have many or large\npositives, and few negative effects or risks, are much more likely to be merged, and merged quickly.\nRisky and less valuable changes are very unlikely to be merged, and may be rejected outright\nrather than receive iterations of review."),(0,o.kt)("h4",{id:"positives"},"Positives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixes the root cause of a bug in existing functionality"),(0,o.kt)("li",{parentName:"ul"},"Adds functionality or fixes a problem needed by a large number of users"),(0,o.kt)("li",{parentName:"ul"},"Simple, targeted"),(0,o.kt)("li",{parentName:"ul"},"Easily tested; has tests"),(0,o.kt)("li",{parentName:"ul"},"Reduces complexity and lines of code"),(0,o.kt)("li",{parentName:"ul"},"Change has already been discussed and is known to committers")),(0,o.kt)("h4",{id:"negatives-risks"},"Negatives, risks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Band-aids a symptom of a bug only"),(0,o.kt)("li",{parentName:"ul"},"Introduces complex new functionality, especially an API that needs to be supported"),(0,o.kt)("li",{parentName:"ul"},"Adds complexity that only helps a niche use case"),(0,o.kt)("li",{parentName:"ul"},"Changes a public API or semantics (rarely allowed)"),(0,o.kt)("li",{parentName:"ul"},"Adds large dependencies"),(0,o.kt)("li",{parentName:"ul"},"Changes versions of existing dependencies"),(0,o.kt)("li",{parentName:"ul"},"Adds a large amount of code"),(0,o.kt)("li",{parentName:"ul"},'Makes lots of modifications in one "big bang" change')),(0,o.kt)("h2",{id:"contributing-code-changes"},"Contributing code changes"),(0,o.kt)("p",null,"Please review the preceding section before proposing a code change. This section documents how to do so."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When you contribute code, you affirm that the contribution is your original work and that you\nlicense the work to the project under the project's open source license. Whether or not you state\nthis explicitly, by submitting any copyrighted material via pull request, email, or other means\nyou agree to license the material under the project's open source license and warrant that you\nhave the legal authority to do so.")),(0,o.kt)("h3",{id:"cloning-the-apache-seatunnel-source-code"},"Cloning the Apache SeaTunnel",(0,o.kt)("span",{class:"tm"},"\u2122")," source code"),(0,o.kt)("p",null,"If you are interested in working with the newest under-development code or contributing to Apache SeaTunnel development, you can check out the master branch from Git:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Master development branch\ngit clone git@github.com:apache/incubator-seatunnel.git\n")),(0,o.kt)("p",null,"Once you've downloaded SeaTunnel, you can find instructions for installing and building it on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/tree/dev/docs"},"documentation page")),(0,o.kt)("h3",{id:"issue"},"ISSUE"),(0,o.kt)("p",null,"Generally, SeaTunnel uses ISSUE to track logical issues, including bugs and improvements, and uses\nGitHub pull requests to manage the review and merge of specific code changes. That is, ISSUEs are\nused to describe ",(0,o.kt)("em",{parentName:"p"},"what")," should be fixed or changed, and high-level approaches, and pull requests\ndescribe ",(0,o.kt)("em",{parentName:"p"},"how")," to implement that change in the project's source code. For example, major design\ndecisions are discussed in ISSUE."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find the existing SeaTunnel ISSUE that the change pertains to.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Do not create a new ISSUE if creating a change to address an existing issue in ISSUE; add to\nthe existing discussion and work instead"),(0,o.kt)("li",{parentName:"ol"},"Look for existing pull requests that are linked from the ISSUE, to understand if someone is\nalready working on the ISSUE"))),(0,o.kt)("li",{parentName:"ol"},"If the change is new, then it usually needs a new ISSUE. However, trivial changes, where the\nwhat should change is virtually the same as the how it should change do not require a ISSUE.\nExample: ",(0,o.kt)("inlineCode",{parentName:"li"},"Fix typos in Foo scaladoc")),(0,o.kt)("li",{parentName:"ol"},"If required, create a new ISSUE:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'Provide a descriptive Title. "Update web UI" or "Problem in scheduler" is not sufficient.\n"Kafka Streaming support fails to handle empty queue in YARN cluster mode" is good.'),(0,o.kt)("li",{parentName:"ol"},"Write a detailed Description. For bug reports, this should ideally include a short\nreproduction of the problem. For new features, it may include a design document."),(0,o.kt)("li",{parentName:"ol"},"Set required fields:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Issue Type"),". Generally, Bug, Improvement and New Feature are the only types used in SeaTunnel."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Priority"),'. Set to Major or below; higher priorities are generally reserved for\ncommitters to set. The main exception is correctness or data-loss issues, which can be flagged as\nBlockers. ISSUE tends to unfortunately conflate "size" and "importance" in its\nPriority field values. Their meaning is roughly:',(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Blocker: pointless to release without this change as the release would be unusable\nto a large minority of users. Correctness and data loss issues should be considered Blockers for their target versions."),(0,o.kt)("li",{parentName:"ol"},"Critical: a large minority of users are missing important functionality without\nthis, and/or a workaround is difficult"),(0,o.kt)("li",{parentName:"ol"},"Major: a small minority of users are missing important functionality without this,\nand there is a workaround"),(0,o.kt)("li",{parentName:"ol"},"Minor: a niche use case is missing some support, but it does not affect usage or\nis easily worked around"),(0,o.kt)("li",{parentName:"ol"},"Trivial: a nice-to-have change but unlikely to be any problem in practice otherwise"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Component")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Affects Version"),". For Bugs, assign at least one version that is known to exhibit the\nproblem or need the change"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Label"),". Not widely used, except for the following:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"correctness"),": a correctness issue"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data-loss"),": a data loss issue"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"release-notes"),': the change\'s effects need mention in release notes. The ISSUE or pull request\nshould include detail suitable for inclusion in release notes -- see "Docs Text" below.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"starter"),": small, simple change suitable for new contributors"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Docs Text"),": For issues that require an entry in the release notes, this should contain the\ninformation that the release manager should include in Release Notes. This should include a short summary\nof what behavior is impacted, and detail on what behavior changed. It can be provisionally filled out\nwhen the ISSUE is opened, but will likely need to be updated with final details when the issue is\nresolved."))),(0,o.kt)("li",{parentName:"ol"},"Do not set the following fields:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Fix Version"),". This is assigned by committers only when resolved."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Target Version"),". This is assigned by committers to indicate a PR has been accepted for\npossible fix by the target version."))),(0,o.kt)("li",{parentName:"ol"},"Do not include a patch file; pull requests are used to propose the actual change."))),(0,o.kt)("li",{parentName:"ol"},"If the change is a large change, consider inviting discussion on the issue at\n",(0,o.kt)("inlineCode",{parentName:"li"},"dev@seatunnel.apache.org")," first before proceeding to implement the change.")),(0,o.kt)("h3",{id:"pull-request"},"Pull request"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://help.github.com/articles/fork-a-repo/"},"Fork")," the GitHub repository at\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/"},"incubator-seatunnel")," if you haven't already"),(0,o.kt)("li",{parentName:"ol"},"Clone your fork, create a new branch, push commits to the branch."),(0,o.kt)("li",{parentName:"ol"},"Consider whether documentation or tests need to be added or updated as part of the change,\nand add them as needed.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"When you add tests, make sure the tests are self-descriptive."),(0,o.kt)("li",{parentName:"ol"},"Also, you should consider writing a ISSUE ID in the tests when your pull request targets to fix\na specific issue. In practice, usually it is added when a ISSUE type is a bug or a PR adds\na couple of tests to an existing test class. See the examples below:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Scala",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'test("SeaTunnel-12345: a short description of the test") {\n  ...\n'))),(0,o.kt)("li",{parentName:"ul"},"Java",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"@Test\npublic void testCase() {\n  // SeaTunnel-12345: a short description of the test\n  ...\n")))))))),(0,o.kt)("h3",{id:"the-review-process"},"The review process"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Other reviewers, including committers, may comment on the changes and suggest modifications.\nChanges can be added by simply pushing more commits to the same branch."),(0,o.kt)("li",{parentName:"ul"},"Lively, polite, rapid technical debate is encouraged from everyone in the community. The outcome\nmay be a rejection of the entire change."),(0,o.kt)("li",{parentName:"ul"},"Keep in mind that changes to more critical parts of SeaTunnel, like its core components, will\nbe subjected to more review, and may require more testing and proof of its correctness than\nother changes."),(0,o.kt)("li",{parentName:"ul"},'Reviewers can indicate that a change looks suitable for merging with a comment such as: "I think\nthis patch looks good". SeaTunnel uses the LGTM convention for indicating the strongest level of\ntechnical sign-off on a patch: simply comment with the word "LGTM". It specifically means: "I\'ve\nlooked at this thoroughly and take as much ownership as if I wrote the patch myself". If you\ncomment LGTM you will be expected to help with bugs or follow-up issues on the patch. Consistent,\njudicious use of LGTMs is a great way to gain credibility as a reviewer with the broader community.'),(0,o.kt)("li",{parentName:"ul"},"Sometimes, other changes will be merged which conflict with your pull request's changes. The\nPR can't be merged until the conflict is resolved. This can be resolved by, for example, adding a remote\nto keep up with upstream changes by ",(0,o.kt)("inlineCode",{parentName:"li"},"git remote add upstream git@github.com:apache/incubator-seatunnel.git"),",\nrunning ",(0,o.kt)("inlineCode",{parentName:"li"},"git fetch upstream")," followed by ",(0,o.kt)("inlineCode",{parentName:"li"},"git rebase upstream/master")," and resolving the conflicts by hand,\nthen pushing the result to your branch."),(0,o.kt)("li",{parentName:"ul"},"Try to be responsive to the discussion rather than let days pass between replies")),(0,o.kt)("h3",{id:"closing-your-pull-request--issue"},"Closing your pull request / ISSUE"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If a change is accepted, it will be merged and the pull request will automatically be closed,\nalong with the associated ISSUE if any",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note that in the rare case you are asked to open a pull request against a branch besides\n",(0,o.kt)("inlineCode",{parentName:"li"},"master"),", that you will actually have to close the pull request manually"),(0,o.kt)("li",{parentName:"ul"},"The ISSUE will be Assigned to the primary contributor to the change as a way of giving credit.\nIf the ISSUE isn't closed and/or Assigned promptly, comment on the ISSUE."))),(0,o.kt)("li",{parentName:"ul"},"If your pull request is ultimately rejected, please close it promptly",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"... because committers can't close PRs directly"),(0,o.kt)("li",{parentName:"ul"},'Pull requests will be automatically closed by an automated process at Apache after about a\nweek if a committer has made a comment like "mind closing this PR?" This means that the\ncommitter is specifically requesting that it be closed.'))),(0,o.kt)("li",{parentName:"ul"},"If a pull request has gotten little or no attention, consider improving the description or\nthe change itself and ping likely reviewers again after a few days. Consider proposing a\nchange that's easier to include, like a smaller and/or less invasive change."),(0,o.kt)("li",{parentName:"ul"},'If it has been reviewed but not taken up after weeks, after soliciting review from the\nmost relevant reviewers, or, has met with neutral reactions, the outcome may be considered a\n"soft no". It is helpful to withdraw and close the PR in this case.'),(0,o.kt)("li",{parentName:"ul"},"If a pull request is closed because it is deemed not the right approach to resolve a ISSUE,\nthen leave the ISSUE open. However if the review makes it clear that the issue identified in\nthe ISSUE is not going to be resolved by any pull request (not a problem, won't fix) then also\nresolve the ISSUE.")),(0,o.kt)("h3",{id:"if-in-doubt"},"If in doubt"),(0,o.kt)("p",null,"If you're not sure about the right style for something, try to follow the style of the existing\ncodebase. Look at whether there are other examples in the code that use your feature. Feel free\nto ask on the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev@seatunnel.apache.org")," list as well and/or ask committers."),(0,o.kt)("h2",{id:"code-of-conduct"},"Code of conduct"),(0,o.kt)("p",null,"The Apache SeaTunnel project follows the ",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/policies/conduct.html"},"Apache Software Foundation Code of Conduct"),". The ",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/policies/conduct.html"},"code of conduct")," applies to all spaces managed by the Apache Software Foundation, including IRC, all public and private mailing lists, issue trackers, wikis, blogs, Twitter, and any other communication channel used by our communities. A code of conduct which is specific to in-person events (ie., conferences) is codified in the published ASF anti-harassment policy."),(0,o.kt)("p",null,"We expect this code of conduct to be honored by everyone who participates in the Apache community formally or informally, or claims any affiliation with the Foundation, in any Foundation-related activities and especially when representing the ASF, in any role."),(0,o.kt)("p",null,"This code ",(0,o.kt)("u",null,"is not exhaustive or complete"),". It serves to distill our common understanding of a collaborative, shared environment and goals. We expect it to be followed in spirit as much as in the letter, so that it can enrich all of us and the technical communities in which we participate."),(0,o.kt)("p",null,"For more information and specific guidelines, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/policies/conduct.html"},"Apache Software Foundation Code of Conduct")," ."),(0,o.kt)("p",null,"Acknowledgement: This document refers to ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/contributing.html"},"Spark")))}p.isMDXComponent=!0}}]);