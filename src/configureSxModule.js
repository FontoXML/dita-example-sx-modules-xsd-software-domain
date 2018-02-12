define([
	'fontoxml-families/configureAsFrameWithBreakableBlock',
	'fontoxml-families/configureAsInlineFrame',
	'fontoxml-families/configureContextualOperations',
	'fontoxml-families/createMarkupLabelWidget',
	'fontoxml-localization/t'
], function (
	configureAsFrameWithBreakableBlock,
	configureAsInlineFrame,
	configureContextualOperations,
	createMarkupLabelWidget,
	t
	) {
	'use strict';

	return function configureSxModule (sxModule) {
		// cmdname
		//     The command name (<cmdname>) element specifies the name of a command when it is part of a software
		//     discussion. This element is part of the DITA software domain, a special set of DITA elements
		//     designed to document software tasks, concepts and reference information. Category: Software elements
		configureAsInlineFrame(sxModule, 'self::cmdname', t('command name'), {
			emptyElementPlaceholderText: t('type the command name')
		});

		// filepath
		//     The <filepath> element indicates the name and optionally the location of a referenced file by
		//     specifying the directory containing the file, and other directories that may precede it in the
		//     system hierarchy. This element is part of the DITA software domain, a special set of DITA elements
		//     designed to document software tasks, concepts and reference information. Category: Software elements
		configureAsInlineFrame(sxModule, 'self::filepath', t('file path'), {
			emptyElementPlaceholderText: t('type the file path')
		});

		// msgblock
		//     The message block (<msgblock>) element contains a multi-line message or set of messages. The message
		//     block can contain multiple message numbers and message descriptions, each enclosed in a <msgnum> and
		//     <msgph> element. It can also contain the message content directly. This element is part of the DITA
		//     software domain, a special set of DITA elements designed to document software tasks, concepts and
		//     reference information. Category: Software elements
		configureAsFrameWithBreakableBlock(sxModule, 'self::msgblock', t('message block'), {
			contextualOperations: [
				{ name: ':contextual-unwrap-msgblock' }
			],
			withNewlineBreakToken: true,
			emptyElementPlaceholderText: t('type the message'),
			visualization: {
				backgroundColor: 'brown',
				blockHeaderLeft: [
					createMarkupLabelWidget()
				],
				isMonospaced: true
			}
		});

		// attributes are not correctly validated yet
		configureContextualOperations(sxModule, 'self::msgblock[@expanse or @frame or @scale or @spectitle or @xml:space]', []);

		// msgnum
		//     The message number (<msgnum>) element contains the number of a message produced by an application or
		//     program. This element is part of the DITA software domain, a special set of DITA elements designed
		//     to document software tasks, concepts and reference information. Category: Software elements
		configureAsInlineFrame(sxModule, 'self::msgnum', t('message number'), {
			emptyElementPlaceholderText: t('type the message number')
		});

		// msgph
		//     The message phrase (<msgph>) element contains the text content of a message produced by an
		//     application or program. It can also contain the variable name (varname) element to illustrate where
		//     variable text content can occur in the message. This element is part of the DITA software domain, a
		//     special set of DITA elements designed to document software tasks, concepts and reference
		//     information. Category: Software elements
		configureAsInlineFrame(sxModule, 'self::msgph', t('message phrase'), {
			emptyElementPlaceholderText: t('type the message')
		});

		// systemoutput
		//     The system output (<systemoutput>) element represents computer output or responses to a command or
		//     situation. A generalized element, it represents any kind of output from the computer, so the author
		//     may wish to choose more specific markup, such as msgph, for messages from the application. The
		//     system output element is part of the DITA software domain, a special set of DITA elements designed
		//     to document software tasks, concepts and reference information. Category: Software elements
		configureAsInlineFrame(sxModule, 'self::systemoutput', t('system output'), {
			emptyElementPlaceholderText: t('type the system output')
		});

		// userinput
		//     The user input (<userinput>) element represens the text a user should input in response to a program
		//     or system prompt. This element is part of the DITA software domain, a special set of DITA elements
		//     designed to document software tasks, concepts and reference information. Category: Software elements
		configureAsInlineFrame(sxModule, 'self::userinput', t('user input'), {
			emptyElementPlaceholderText: t('type the user input')
		});

		// varname
		//     The variable name (<varname>) element defines a variable that must be supplied to a software
		//     application. The variable name element is very similar to the variable (var) element, but variable
		//     name is used outside of syntax diagrams. This element is part of the DITA software domain, a special
		//     set of DITA elements designed to document software tasks, concepts and reference information.
		//     Category: Software elements
		configureAsInlineFrame(sxModule, 'self::varname', t('variable name'), {
			emptyElementPlaceholderText: t('type the variable name')
		});
	};
});
