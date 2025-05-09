/*!
 * libav.js v6.5.7.1-2-g8fb008b
 *
 * This software is compiled from several sources, the licenses for which are
 * included herein.
 *
 * ---
 *
 * ffmpeg:
 *
 *  Copyright (c) 2000-2024 Fabrice Bellard et al
 *
 *                   GNU LESSER GENERAL PUBLIC LICENSE
 *                        Version 2.1, February 1999
 *
 *  Copyright (C) 1991, 1999 Free Software Foundation, Inc.
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 *  Everyone is permitted to copy and distribute verbatim copies
 *  of this license document, but changing it is not allowed.
 *
 * [This is the first released version of the Lesser GPL.  It also counts
 *  as the successor of the GNU Library Public License, version 2, hence
 *  the version number 2.1.]
 *
 *                             Preamble
 *
 *   The licenses for most software are designed to take away your
 * freedom to share and change it.  By contrast, the GNU General Public
 * Licenses are intended to guarantee your freedom to share and change
 * free software--to make sure the software is free for all its users.
 *
 *   This license, the Lesser General Public License, applies to some
 * specially designated software packages--typically libraries--of the
 * Free Software Foundation and other authors who decide to use it.  You
 * can use it too, but we suggest you first think carefully about whether
 * this license or the ordinary General Public License is the better
 * strategy to use in any particular case, based on the explanations below.
 *
 *   When we speak of free software, we are referring to freedom of use,
 * not price.  Our General Public Licenses are designed to make sure that
 * you have the freedom to distribute copies of free software (and charge
 * for this service if you wish); that you receive source code or can get
 * it if you want it; that you can change the software and use pieces of
 * it in new free programs; and that you are informed that you can do
 * these things.
 *
 *   To protect your rights, we need to make restrictions that forbid
 * distributors to deny you these rights or to ask you to surrender these
 * rights.  These restrictions translate to certain responsibilities for
 * you if you distribute copies of the library or if you modify it.
 *
 *   For example, if you distribute copies of the library, whether gratis
 * or for a fee, you must give the recipients all the rights that we gave
 * you.  You must make sure that they, too, receive or can get the source
 * code.  If you link other code with the library, you must provide
 * complete object files to the recipients, so that they can relink them
 * with the library after making changes to the library and recompiling
 * it.  And you must show them these terms so they know their rights.
 *
 *   We protect your rights with a two-step method: (1) we copyright the
 * library, and (2) we offer you this license, which gives you legal
 * permission to copy, distribute and/or modify the library.
 *
 *   To protect each distributor, we want to make it very clear that
 * there is no warranty for the free library.  Also, if the library is
 * modified by someone else and passed on, the recipients should know
 * that what they have is not the original version, so that the original
 * author's reputation will not be affected by problems that might be
 * introduced by others.
 *
 *   Finally, software patents pose a constant threat to the existence of
 * any free program.  We wish to make sure that a company cannot
 * effectively restrict the users of a free program by obtaining a
 * restrictive license from a patent holder.  Therefore, we insist that
 * any patent license obtained for a version of the library must be
 * consistent with the full freedom of use specified in this license.
 *
 *   Most GNU software, including some libraries, is covered by the
 * ordinary GNU General Public License.  This license, the GNU Lesser
 * General Public License, applies to certain designated libraries, and
 * is quite different from the ordinary General Public License.  We use
 * this license for certain libraries in order to permit linking those
 * libraries into non-free programs.
 *
 *   When a program is linked with a library, whether statically or using
 * a shared library, the combination of the two is legally speaking a
 * combined work, a derivative of the original library.  The ordinary
 * General Public License therefore permits such linking only if the
 * entire combination fits its criteria of freedom.  The Lesser General
 * Public License permits more lax criteria for linking other code with
 * the library.
 *
 *   We call this license the "Lesser" General Public License because it
 * does Less to protect the user's freedom than the ordinary General
 * Public License.  It also provides other free software developers Less
 * of an advantage over competing non-free programs.  These disadvantages
 * are the reason we use the ordinary General Public License for many
 * libraries.  However, the Lesser license provides advantages in certain
 * special circumstances.
 *
 *   For example, on rare occasions, there may be a special need to
 * encourage the widest possible use of a certain library, so that it becomes
 * a de-facto standard.  To achieve this, non-free programs must be
 * allowed to use the library.  A more frequent case is that a free
 * library does the same job as widely used non-free libraries.  In this
 * case, there is little to gain by limiting the free library to free
 * software only, so we use the Lesser General Public License.
 *
 *   In other cases, permission to use a particular library in non-free
 * programs enables a greater number of people to use a large body of
 * free software.  For example, permission to use the GNU C Library in
 * non-free programs enables many more people to use the whole GNU
 * operating system, as well as its variant, the GNU/Linux operating
 * system.
 *
 *   Although the Lesser General Public License is Less protective of the
 * users' freedom, it does ensure that the user of a program that is
 * linked with the Library has the freedom and the wherewithal to run
 * that program using a modified version of the Library.
 *
 *   The precise terms and conditions for copying, distribution and
 * modification follow.  Pay close attention to the difference between a
 * "work based on the library" and a "work that uses the library".  The
 * former contains code derived from the library, whereas the latter must
 * be combined with the library in order to run.
 *
 *                   GNU LESSER GENERAL PUBLIC LICENSE
 *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *   0. This License Agreement applies to any software library or other
 * program which contains a notice placed by the copyright holder or
 * other authorized party saying it may be distributed under the terms of
 * this Lesser General Public License (also called "this License").
 * Each licensee is addressed as "you".
 *
 *   A "library" means a collection of software functions and/or data
 * prepared so as to be conveniently linked with application programs
 * (which use some of those functions and data) to form executables.
 *
 *   The "Library", below, refers to any such software library or work
 * which has been distributed under these terms.  A "work based on the
 * Library" means either the Library or any derivative work under
 * copyright law: that is to say, a work containing the Library or a
 * portion of it, either verbatim or with modifications and/or translated
 * straightforwardly into another language.  (Hereinafter, translation is
 * included without limitation in the term "modification".)
 *
 *   "Source code" for a work means the preferred form of the work for
 * making modifications to it.  For a library, complete source code means
 * all the source code for all modules it contains, plus any associated
 * interface definition files, plus the scripts used to control compilation
 * and installation of the library.
 *
 *   Activities other than copying, distribution and modification are not
 * covered by this License; they are outside its scope.  The act of
 * running a program using the Library is not restricted, and output from
 * such a program is covered only if its contents constitute a work based
 * on the Library (independent of the use of the Library in a tool for
 * writing it).  Whether that is true depends on what the Library does
 * and what the program that uses the Library does.
 *
 *   1. You may copy and distribute verbatim copies of the Library's
 * complete source code as you receive it, in any medium, provided that
 * you conspicuously and appropriately publish on each copy an
 * appropriate copyright notice and disclaimer of warranty; keep intact
 * all the notices that refer to this License and to the absence of any
 * warranty; and distribute a copy of this License along with the
 * Library.
 *
 *   You may charge a fee for the physical act of transferring a copy,
 * and you may at your option offer warranty protection in exchange for a
 * fee.
 *
 *   2. You may modify your copy or copies of the Library or any portion
 * of it, thus forming a work based on the Library, and copy and
 * distribute such modifications or work under the terms of Section 1
 * above, provided that you also meet all of these conditions:
 *
 *     a) The modified work must itself be a software library.
 *
 *     b) You must cause the files modified to carry prominent notices
 *     stating that you changed the files and the date of any change.
 *
 *     c) You must cause the whole of the work to be licensed at no
 *     charge to all third parties under the terms of this License.
 *
 *     d) If a facility in the modified Library refers to a function or a
 *     table of data to be supplied by an application program that uses
 *     the facility, other than as an argument passed when the facility
 *     is invoked, then you must make a good faith effort to ensure that,
 *     in the event an application does not supply such function or
 *     table, the facility still operates, and performs whatever part of
 *     its purpose remains meaningful.
 *
 *     (For example, a function in a library to compute square roots has
 *     a purpose that is entirely well-defined independent of the
 *     application.  Therefore, Subsection 2d requires that any
 *     application-supplied function or table used by this function must
 *     be optional: if the application does not supply it, the square
 *     root function must still compute square roots.)
 *
 * These requirements apply to the modified work as a whole.  If
 * identifiable sections of that work are not derived from the Library,
 * and can be reasonably considered independent and separate works in
 * themselves, then this License, and its terms, do not apply to those
 * sections when you distribute them as separate works.  But when you
 * distribute the same sections as part of a whole which is a work based
 * on the Library, the distribution of the whole must be on the terms of
 * this License, whose permissions for other licensees extend to the
 * entire whole, and thus to each and every part regardless of who wrote
 * it.
 *
 * Thus, it is not the intent of this section to claim rights or contest
 * your rights to work written entirely by you; rather, the intent is to
 * exercise the right to control the distribution of derivative or
 * collective works based on the Library.
 *
 * In addition, mere aggregation of another work not based on the Library
 * with the Library (or with a work based on the Library) on a volume of
 * a storage or distribution medium does not bring the other work under
 * the scope of this License.
 *
 *   3. You may opt to apply the terms of the ordinary GNU General Public
 * License instead of this License to a given copy of the Library.  To do
 * this, you must alter all the notices that refer to this License, so
 * that they refer to the ordinary GNU General Public License, version 2,
 * instead of to this License.  (If a newer version than version 2 of the
 * ordinary GNU General Public License has appeared, then you can specify
 * that version instead if you wish.)  Do not make any other change in
 * these notices.
 *
 *   Once this change is made in a given copy, it is irreversible for
 * that copy, so the ordinary GNU General Public License applies to all
 * subsequent copies and derivative works made from that copy.
 *
 *   This option is useful when you wish to copy part of the code of
 * the Library into a program that is not a library.
 *
 *   4. You may copy and distribute the Library (or a portion or
 * derivative of it, under Section 2) in object code or executable form
 * under the terms of Sections 1 and 2 above provided that you accompany
 * it with the complete corresponding machine-readable source code, which
 * must be distributed under the terms of Sections 1 and 2 above on a
 * medium customarily used for software interchange.
 *
 *   If distribution of object code is made by offering access to copy
 * from a designated place, then offering equivalent access to copy the
 * source code from the same place satisfies the requirement to
 * distribute the source code, even though third parties are not
 * compelled to copy the source along with the object code.
 *
 *   5. A program that contains no derivative of any portion of the
 * Library, but is designed to work with the Library by being compiled or
 * linked with it, is called a "work that uses the Library".  Such a
 * work, in isolation, is not a derivative work of the Library, and
 * therefore falls outside the scope of this License.
 *
 *   However, linking a "work that uses the Library" with the Library
 * creates an executable that is a derivative of the Library (because it
 * contains portions of the Library), rather than a "work that uses the
 * library".  The executable is therefore covered by this License.
 * Section 6 states terms for distribution of such executables.
 *
 *   When a "work that uses the Library" uses material from a header file
 * that is part of the Library, the object code for the work may be a
 * derivative work of the Library even though the source code is not.
 * Whether this is true is especially significant if the work can be
 * linked without the Library, or if the work is itself a library.  The
 * threshold for this to be true is not precisely defined by law.
 *
 *   If such an object file uses only numerical parameters, data
 * structure layouts and accessors, and small macros and small inline
 * functions (ten lines or less in length), then the use of the object
 * file is unrestricted, regardless of whether it is legally a derivative
 * work.  (Executables containing this object code plus portions of the
 * Library will still fall under Section 6.)
 *
 *   Otherwise, if the work is a derivative of the Library, you may
 * distribute the object code for the work under the terms of Section 6.
 * Any executables containing that work also fall under Section 6,
 * whether or not they are linked directly with the Library itself.
 *
 *   6. As an exception to the Sections above, you may also combine or
 * link a "work that uses the Library" with the Library to produce a
 * work containing portions of the Library, and distribute that work
 * under terms of your choice, provided that the terms permit
 * modification of the work for the customer's own use and reverse
 * engineering for debugging such modifications.
 *
 *   You must give prominent notice with each copy of the work that the
 * Library is used in it and that the Library and its use are covered by
 * this License.  You must supply a copy of this License.  If the work
 * during execution displays copyright notices, you must include the
 * copyright notice for the Library among them, as well as a reference
 * directing the user to the copy of this License.  Also, you must do one
 * of these things:
 *
 *     a) Accompany the work with the complete corresponding
 *     machine-readable source code for the Library including whatever
 *     changes were used in the work (which must be distributed under
 *     Sections 1 and 2 above); and, if the work is an executable linked
 *     with the Library, with the complete machine-readable "work that
 *     uses the Library", as object code and/or source code, so that the
 *     user can modify the Library and then relink to produce a modified
 *     executable containing the modified Library.  (It is understood
 *     that the user who changes the contents of definitions files in the
 *     Library will not necessarily be able to recompile the application
 *     to use the modified definitions.)
 *
 *     b) Use a suitable shared library mechanism for linking with the
 *     Library.  A suitable mechanism is one that (1) uses at run time a
 *     copy of the library already present on the user's computer system,
 *     rather than copying library functions into the executable, and (2)
 *     will operate properly with a modified version of the library, if
 *     the user installs one, as long as the modified version is
 *     interface-compatible with the version that the work was made with.
 *
 *     c) Accompany the work with a written offer, valid for at
 *     least three years, to give the same user the materials
 *     specified in Subsection 6a, above, for a charge no more
 *     than the cost of performing this distribution.
 *
 *     d) If distribution of the work is made by offering access to copy
 *     from a designated place, offer equivalent access to copy the above
 *     specified materials from the same place.
 *
 *     e) Verify that the user has already received a copy of these
 *     materials or that you have already sent this user a copy.
 *
 *   For an executable, the required form of the "work that uses the
 * Library" must include any data and utility programs needed for
 * reproducing the executable from it.  However, as a special exception,
 * the materials to be distributed need not include anything that is
 * normally distributed (in either source or binary form) with the major
 * components (compiler, kernel, and so on) of the operating system on
 * which the executable runs, unless that component itself accompanies
 * the executable.
 *
 *   It may happen that this requirement contradicts the license
 * restrictions of other proprietary libraries that do not normally
 * accompany the operating system.  Such a contradiction means you cannot
 * use both them and the Library together in an executable that you
 * distribute.
 *
 *   7. You may place library facilities that are a work based on the
 * Library side-by-side in a single library together with other library
 * facilities not covered by this License, and distribute such a combined
 * library, provided that the separate distribution of the work based on
 * the Library and of the other library facilities is otherwise
 * permitted, and provided that you do these two things:
 *
 *     a) Accompany the combined library with a copy of the same work
 *     based on the Library, uncombined with any other library
 *     facilities.  This must be distributed under the terms of the
 *     Sections above.
 *
 *     b) Give prominent notice with the combined library of the fact
 *     that part of it is a work based on the Library, and explaining
 *     where to find the accompanying uncombined form of the same work.
 *
 *   8. You may not copy, modify, sublicense, link with, or distribute
 * the Library except as expressly provided under this License.  Any
 * attempt otherwise to copy, modify, sublicense, link with, or
 * distribute the Library is void, and will automatically terminate your
 * rights under this License.  However, parties who have received copies,
 * or rights, from you under this License will not have their licenses
 * terminated so long as such parties remain in full compliance.
 *
 *   9. You are not required to accept this License, since you have not
 * signed it.  However, nothing else grants you permission to modify or
 * distribute the Library or its derivative works.  These actions are
 * prohibited by law if you do not accept this License.  Therefore, by
 * modifying or distributing the Library (or any work based on the
 * Library), you indicate your acceptance of this License to do so, and
 * all its terms and conditions for copying, distributing or modifying
 * the Library or works based on it.
 *
 *   10. Each time you redistribute the Library (or any work based on the
 * Library), the recipient automatically receives a license from the
 * original licensor to copy, distribute, link with or modify the Library
 * subject to these terms and conditions.  You may not impose any further
 * restrictions on the recipients' exercise of the rights granted herein.
 * You are not responsible for enforcing compliance by third parties with
 * this License.
 *
 *   11. If, as a consequence of a court judgment or allegation of patent
 * infringement or for any other reason (not limited to patent issues),
 * conditions are imposed on you (whether by court order, agreement or
 * otherwise) that contradict the conditions of this License, they do not
 * excuse you from the conditions of this License.  If you cannot
 * distribute so as to satisfy simultaneously your obligations under this
 * License and any other pertinent obligations, then as a consequence you
 * may not distribute the Library at all.  For example, if a patent
 * license would not permit royalty-free redistribution of the Library by
 * all those who receive copies directly or indirectly through you, then
 * the only way you could satisfy both it and this License would be to
 * refrain entirely from distribution of the Library.
 *
 * If any portion of this section is held invalid or unenforceable under any
 * particular circumstance, the balance of the section is intended to apply,
 * and the section as a whole is intended to apply in other circumstances.
 *
 * It is not the purpose of this section to induce you to infringe any
 * patents or other property right claims or to contest validity of any
 * such claims; this section has the sole purpose of protecting the
 * integrity of the free software distribution system which is
 * implemented by public license practices.  Many people have made
 * generous contributions to the wide range of software distributed
 * through that system in reliance on consistent application of that
 * system; it is up to the author/donor to decide if he or she is willing
 * to distribute software through any other system and a licensee cannot
 * impose that choice.
 *
 * This section is intended to make thoroughly clear what is believed to
 * be a consequence of the rest of this License.
 *
 *   12. If the distribution and/or use of the Library is restricted in
 * certain countries either by patents or by copyrighted interfaces, the
 * original copyright holder who places the Library under this License may add
 * an explicit geographical distribution limitation excluding those countries,
 * so that distribution is permitted only in or among countries not thus
 * excluded.  In such case, this License incorporates the limitation as if
 * written in the body of this License.
 *
 *   13. The Free Software Foundation may publish revised and/or new
 * versions of the Lesser General Public License from time to time.
 * Such new versions will be similar in spirit to the present version,
 * but may differ in detail to address new problems or concerns.
 *
 * Each version is given a distinguishing version number.  If the Library
 * specifies a version number of this License which applies to it and
 * "any later version", you have the option of following the terms and
 * conditions either of that version or of any later version published by
 * the Free Software Foundation.  If the Library does not specify a
 * license version number, you may choose any version ever published by
 * the Free Software Foundation.
 *
 *   14. If you wish to incorporate parts of the Library into other free
 * programs whose distribution conditions are incompatible with these,
 * write to the author to ask for permission.  For software which is
 * copyrighted by the Free Software Foundation, write to the Free
 * Software Foundation; we sometimes make exceptions for this.  Our
 * decision will be guided by the two goals of preserving the free status
 * of all derivatives of our free software and of promoting the sharing
 * and reuse of software generally.
 *
 *                             NO WARRANTY
 *
 *   15. BECAUSE THE LIBRARY IS LICENSED FREE OF CHARGE, THERE IS NO
 * WARRANTY FOR THE LIBRARY, TO THE EXTENT PERMITTED BY APPLICABLE LAW.
 * EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR
 * OTHER PARTIES PROVIDE THE LIBRARY "AS IS" WITHOUT WARRANTY OF ANY
 * KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE
 * LIBRARY IS WITH YOU.  SHOULD THE LIBRARY PROVE DEFECTIVE, YOU ASSUME
 * THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
 *
 *   16. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN
 * WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY
 * AND/OR REDISTRIBUTE THE LIBRARY AS PERMITTED ABOVE, BE LIABLE TO YOU
 * FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR
 * CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE
 * LIBRARY (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING
 * RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A
 * FAILURE OF THE LIBRARY TO OPERATE WITH ANY OTHER SOFTWARE), EVEN IF
 * SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
 * DAMAGES.
 *
 *                      END OF TERMS AND CONDITIONS
 *
 *            How to Apply These Terms to Your New Libraries
 *
 *   If you develop a new library, and you want it to be of the greatest
 * possible use to the public, we recommend making it free software that
 * everyone can redistribute and change.  You can do so by permitting
 * redistribution under these terms (or, alternatively, under the terms of the
 * ordinary General Public License).
 *
 *   To apply these terms, attach the following notices to the library.  It is
 * safest to attach them to the start of each source file to most effectively
 * convey the exclusion of warranty; and each file should have at least the
 * "copyright" line and a pointer to where the full notice is found.
 *
 *     <one line to give the library's name and a brief idea of what it does.>
 *     Copyright (C) <year>  <name of author>
 *
 *     This library is free software; you can redistribute it and/or
 *     modify it under the terms of the GNU Lesser General Public
 *     License as published by the Free Software Foundation; either
 *     version 2.1 of the License, or (at your option) any later version.
 *
 *     This library is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *     Lesser General Public License for more details.
 *
 *     You should have received a copy of the GNU Lesser General Public
 *     License along with this library; if not, write to the Free Software
 *     Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 *
 * Also add information on how to contact you by electronic and paper mail.
 *
 * You should also get your employer (if you work as a programmer) or your
 * school, if any, to sign a "copyright disclaimer" for the library, if
 * necessary.  Here is a sample; alter the names:
 *
 *   Yoyodyne, Inc., hereby disclaims all copyright interest in the
 *   library `Frob' (a library for tweaking knobs) written by James Random Hacker.
 *
 *   <signature of Ty Coon>, 1 April 1990
 *   Ty Coon, President of Vice
 *
 * That's all there is to it!
 *
 *
 * ---
 *
 * ffmpeg oggdec:
 *
 *     Copyright (C) 2005  Michael Ahlberg, Måns Rullgård
 *     Copyright (C) 2005  Matthieu CASTET, Alex Beregszaszi
 *     Copyright (C) 2008  Reimar Döffinger
 *
 *     Permission is hereby granted, free of charge, to any person obtaining a
 *     copy of this software and associated documentation files (the
 *     "Software"), to deal in the Software without restriction, including
 *     without limitation the rights to use, copy, modify, merge, publish,
 *     distribute, sublicense, and/or sell copies of the Software, and to
 *     permit persons to whom the Software is furnished to do so, subject to
 *     the following conditions:
 *
 *     The above copyright notice and this permission notice shall be included
 *     in all copies or substantial portions of the Software.
 *
 *     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 *     OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 *     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 *     IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 *     CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 *     TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 *     SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * ---
 *
 * opus:
 *
 * Copyright 2001-2011 Xiph.Org, Skype Limited, Octasic,
 *                     Jean-Marc Valin, Timothy B. Terriberry,
 *                     CSIRO, Gregory Maxwell, Mark Borgerding,
 *                     Erik de Castro Lopo
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * - Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 * 
 * - Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 * 
 * - Neither the name of Internet Society, IETF or IETF Trust, nor the names of
 *   specific contributors, may be used to endorse or promote products derived
 *   from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS ``AS
 * IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * Opus is subject to the royalty-free patent licenses which are specified at:
 * 
 * Xiph.Org Foundation:
 * https://datatracker.ietf.org/ipr/1524/
 * 
 * Microsoft Corporation:
 * https://datatracker.ietf.org/ipr/1914/
 * 
 * Broadcom Corporation:
 * https://datatracker.ietf.org/ipr/1526/
 *
 *
 * ---
 *
 * emscripten and musl:
 *
 * Copyright (c) 2010-2024 Emscripten authors, see AUTHORS file.
 * Copyright © 2005-2024 Rich Felker, et al.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * emcc (Emscripten gcc/clang-like replacement + linker emulating GNU ld) 3.1.6 ()
 *
 */

var LibAVFactory = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(LibAVFactory) {
  LibAVFactory = LibAVFactory || {};



// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof LibAVFactory != 'undefined' ? LibAVFactory : {};

// See https://caniuse.com/mdn-javascript_builtins_object_assign

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
/*
 * Copyright (C) 2019-2024 Yahweasel and contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
 * CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

// Import LibAV.base if applicable
if (typeof _scriptName === "undefined") {
    if (typeof LibAV === "object" && LibAV && LibAV.base)
        _scriptName = LibAV.base + "/libav-6.5.7.1-webcodecs-extended.dbg.wasm.js";
    else if (typeof self === "object" && self && self.location)
        _scriptName = self.location.href;
}

Module.locateFile = function(path, prefix) {
    // if it's the wasm file
    if (path.lastIndexOf(".wasm") === path.length - 5 &&
        path.indexOf("libav-") !== -1) {
        // Look for overrides
        if (Module.wasmurl)
            return Module.wasmurl;
        if (Module.variant)
            return prefix + "libav-6.5.7.1-" + Module.variant + ".dbg.wasm.wasm";
    }

    // Otherwise, use the default
    return prefix + path;
}


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window == 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts == 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process == 'object' && typeof process.versions == 'object' && typeof process.versions.node == 'string';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

// Normally we don't log exceptions but instead let them bubble out the top
// level where the embedding environment (e.g. the browser) can handle
// them.
// However under v8 and node we sometimes exit the process direcly in which case
// its up to use us to log the exception before exiting.
// If we fix https://github.com/emscripten-core/emscripten/issues/15080
// this may no longer be needed under node.
function logExceptionOnExit(e) {
  if (e instanceof ExitStatus) return;
  let toLog = e;
  err('exiting due to exception: ' + toLog);
}

var fs;
var nodePath;
var requireNodeFS;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }




requireNodeFS = () => {
  // Use nodePath as the indicator for these not being initialized,
  // since in some environments a global fs may have already been
  // created.
  if (!nodePath) {
    fs = require('fs');
    nodePath = require('path');
  }
};

read_ = function shell_read(filename, binary) {
  requireNodeFS();
  filename = nodePath['normalize'](filename);
  return fs.readFileSync(filename, binary ? undefined : 'utf8');
};

readBinary = (filename) => {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  return ret;
};

readAsync = (filename, onload, onerror) => {
  requireNodeFS();
  filename = nodePath['normalize'](filename);
  fs.readFile(filename, function(err, data) {
    if (err) onerror(err);
    else onload(data.buffer);
  });
};


  if (process['argv'].length > 1) {
    thisProgram = process['argv'][1].replace(/\\/g, '/');
  }

  arguments_ = process['argv'].slice(2);

  // MODULARIZE will export the module in the proper place outside, we don't need to export here

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  // Without this older versions of node (< v15) will log unhandled rejections
  // but return 0, which is not normally the desired behaviour.  This is
  // not be needed with node v15 and about because it is now the default
  // behaviour:
  // See https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode
  process['on']('unhandledRejection', function(reason) { throw reason; });

  quit_ = (status, toThrow) => {
    if (keepRuntimeAlive()) {
      process['exitCode'] = status;
      throw toThrow;
    }
    logExceptionOnExit(toThrow);
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {



  read_ = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  }

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = (url, onload, onerror) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  }


  }

  setWindowTitle = (title) => document.title = title;
} else
{
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];

if (Module['thisProgram']) thisProgram = Module['thisProgram'];

if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message




var STACK_ALIGN = 16;
var POINTER_SIZE = 4;

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length - 1] === '*') {
        return POINTER_SIZE;
      } else if (type[0] === 'i') {
        const bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}




// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function == "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

function updateTableMap(offset, count) {
  for (var i = offset; i < offset + count; i++) {
    var item = getWasmTableEntry(i);
    // Ignore null values.
    if (item) {
      functionsInTableMap.set(item, i);
    }
  }
}

/**
 * Add a function to the table.
 * 'sig' parameter is required if the function being added is a JS function.
 * @param {string=} sig
 */
function addFunction(func, sig) {

  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    updateTableMap(0, wasmTable.length);
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    setWasmTableEntry(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    setWasmTableEntry(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(getWasmTableEntry(index));
  freeTableIndexes.push(index);
}






var tempRet0 = 0;
var setTempRet0 = (value) => { tempRet0 = value; };
var getTempRet0 = () => tempRet0;



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime = Module['noExitRuntime'] || true;

if (typeof WebAssembly != 'object') {
  abort('no native wasm support detected');
}




// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type = 'i8', noSafe) {
  if (type.charAt(type.length-1) === '*') type = 'i32';
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type = 'i8', noSafe) {
  if (type.charAt(type.length-1) === '*') type = 'i32';
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return Number(HEAPF64[((ptr)>>3)]);
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}


// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    // This build was created without ASSERTIONS defined.  `assert()` should not
    // ever be called in this configuration but in case there are callers in
    // the wild leave this simple abort() implemenation here for now.
    abort(text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  function onDone(ret) {
    runtimeKeepalivePop();
    if (stack !== 0) stackRestore(stack);
    return convertReturnValue(ret);
  }
  runtimeKeepalivePush();
  var asyncMode = opts && opts.async;
  // Check if we started an async operation just now.
  if (Asyncify.currData) {
    // If so, the WASM function ran asynchronous and unwound its stack.
    // We need to return a Promise that resolves the return value
    // once the stack is rewound and execution finishes.
    return Asyncify.whenDone().then(onDone);
  }

  ret = onDone(ret);
  // If this is an async ccall, ensure we return a promise
  if (asyncMode) return Promise.resolve(ret);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}




var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

/**
 * allocate(): This function is no longer used by emscripten but is kept around to avoid
 *             breaking external users.
 *             You should normally not use allocate(), and instead allocate
 *             memory using _malloc()/stackAlloc(), initialize it with
 *             setValue(), and so forth.
 * @param {(Uint8Array|Array<number>)} slab: An array of data.
 * @param {number=} allocator : How to allocate memory, see ALLOC_*
 */
function allocate(slab, allocator) {
  var ret;

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (!slab.subarray && !slab.slice) {
    slab = new Uint8Array(slab);
  }
  HEAPU8.set(slab, ret);
  return ret;
}





// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  ;
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}





// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)] = codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)] = codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)] = 0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)] = 0;
}


// Memory management

var HEAP,
/** @type {!ArrayBuffer} */
  buffer,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/** @type {!Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 25165824;


// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;










var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;
var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
  return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;

  
if (!Module["noFSInit"] && !FS.init.initialized)
  FS.init();
FS.ignorePermissions = false;

TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc


// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  {
    if (Module['onAbort']) {
      Module['onAbort'](what);
    }
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what += '. Build with -s ASSERTIONS=1 for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // defintion for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.

  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}








// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}


var wasmBinaryFile;
  wasmBinaryFile = 'libav-6.5.7.1-webcodecs-extended.dbg.wasm.wasm';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, try to to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == 'function'
      && !isFileURI(wasmBinaryFile)
    ) {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(wasmBinaryFile);
      });
    }
    else {
      if (readAsync) {
        // fetch is not available or url is file => try XHR (readAsync uses XHR internally)
        return new Promise(function(resolve, reject) {
          readAsync(wasmBinaryFile, function(response) { resolve(new Uint8Array(/** @type{!ArrayBuffer} */(response))) }, reject)
        });
      }
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    exports = Asyncify.instrumentWasmExports(exports);

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];

    addOnInit(Module['asm']['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(function (instance) {
      return instance;
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      abort(reason);
    });
  }

  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming == 'function' &&
        !isDataURI(wasmBinaryFile) &&
        // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
        !isFileURI(wasmBinaryFile) &&
        typeof fetch == 'function') {
      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
        // Suppress closure warning here since the upstream definition for
        // instantiateStreaming only allows Promise<Repsponse> rather than
        // an actual Response.
        // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
        /** @suppress {checkTypes} */
        var result = WebAssembly.instantiateStreaming(response, info);

        return result.then(
          receiveInstantiationResult,
          function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            return instantiateArrayBuffer(receiveInstantiationResult);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiationResult);
    }
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      exports = Asyncify.instrumentWasmExports(exports);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  // If instantiation fails, reject the module ready promise.
  instantiateAsync().catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};
function emfiberthreads_pthread_mutex_timedwait_clearTimeout(timeout){ clearTimeout(timeout); }
function emfiberthreads_pthread_mutex_timedwait_setTimeout(cond,thr,timeoutReached,sec,nsec){ Module.HEAPU32[timeoutReached/4] = 0; var wait = (sec * 1000 + nsec / 1000000) - new Date().getTime(); return setTimeout(function() { Module.HEAPU32[timeoutReached/4] = 1; Module.ccall( "emfiberthreads_timeout_expiry", null, ["number", "number"], [cond, thr] ); }, wait); }
function libavjs_wait_reader(fd){ return Asyncify.handleAsync(function() { return new Promise(function(res) { var name = Module.fdName(fd); var waiters = Module.ff_reader_dev_waiters[name]; if (!waiters) waiters = Module.ff_reader_dev_waiters[name] = []; waiters.push(res); }); }); }
function writeoutEmscriptenOOM(){ throw new Error("Out of memory"); }





  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func == 'number') {
          if (callback.arg === undefined) {
            (function() {  dynCall_v.call(null, func); })();
          } else {
            (function(a1) {  dynCall_vi.apply(null, [func, a1]); })(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function withStackSave(f) {
      var stack = stackSave();
      var ret = f();
      stackRestore(stack);
      return ret;
    }
  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function getWasmTableEntry(funcPtr) {
      // In -Os and -Oz builds, do not implement a JS side wasm table mirror for small
      // code size, but directly access wasmTable, which is a bit slower as uncached.
      return wasmTable.get(funcPtr);
    }

  function handleException(e) {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      quit_(1, e);
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function setWasmTableEntry(idx, func) {
      wasmTable.set(idx, func);
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  var PATH = {splitPath:function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function(parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function(path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function(path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function(path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function(path) {
        return PATH.splitPath(path)[3];
      },join:function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function(l, r) {
        return PATH.normalize(l + '/' + r);
      }};
  
  function getRandomDevice() {
      if (typeof crypto == 'object' && typeof crypto['getRandomValues'] == 'function') {
        // for modern web browsers
        var randomBuffer = new Uint8Array(1);
        return function() { crypto.getRandomValues(randomBuffer); return randomBuffer[0]; };
      } else
      if (ENVIRONMENT_IS_NODE) {
        // for nodejs with or without crypto support included
        try {
          var crypto_module = require('crypto');
          // nodejs has crypto support
          return function() { return crypto_module['randomBytes'](1)[0]; };
        } catch (e) {
          // nodejs doesn't have crypto support
        }
      }
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      return function() { abort("randomDevice"); };
    }
  
  var PATH_FS = {resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path != 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY = {ttys:[],init:function () {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function(stream) {
          // flush any pending line data
          stream.tty.ops.flush(stream.tty);
        },flush:function(stream) {
          stream.tty.ops.flush(stream.tty);
        },read:function(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function(tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              // we will read data by chunks of BUFSIZE
              var BUFSIZE = 256;
              var buf = Buffer.alloc(BUFSIZE);
              var bytesRead = 0;
  
              try {
                bytesRead = fs.readSync(process.stdin.fd, buf, 0, BUFSIZE, -1);
              } catch(e) {
                // Cross-platform differences: on Windows, reading EOF throws an exception, but on other OSes,
                // reading EOF returns 0. Uniformize behavior by treating the EOF exception to return 0.
                if (e.toString().includes('EOF')) bytesRead = 0;
                else throw e;
              }
  
              if (bytesRead > 0) {
                result = buf.slice(0, bytesRead).toString('utf-8');
              } else {
                result = null;
              }
            } else
            if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }},default_tty1_ops:{put_char:function(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },flush:function(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        }}};
  
  function zeroMemory(address, size) {
      HEAPU8.fill(0, address, address + size);
    }
  
  function alignMemory(size, alignment) {
      return Math.ceil(size / alignment) * alignment;
    }
  function mmapAlloc(size) {
      size = alignMemory(size, 65536);
      var ptr = _emscripten_builtin_memalign(65536, size);
      if (!ptr) return 0;
      zeroMemory(ptr, size);
      return ptr;
    }
  var MEMFS = {ops_table:null,mount:function(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },createNode:function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.timestamp = node.timestamp;
        }
        return node;
      },getFileDataAsTypedArray:function(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },expandFileStorage:function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },resizeFileStorage:function(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },node_ops:{getattr:function(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },lookup:function(parent, name) {
          throw FS.genericErrors[44];
        },mknod:function(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now()
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        },unlink:function(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },rmdir:function(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },readdir:function(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        }},stream_ops:{read:function(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },write:function(stream, buffer, offset, length, position, canOwn) {
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },llseek:function(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },allocate:function(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },mmap:function(stream, address, length, position, prot, flags) {
          if (address !== 0) {
            // We don't currently support location hints for the address of the mapping
            throw new FS.ErrnoError(28);
          }
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        },msync:function(stream, buffer, offset, length, mmapFlags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          if (mmapFlags & 2) {
            // MAP_PRIVATE calls need not to be synced back to underlying fs
            return 0;
          }
  
          var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        }}};
  
  /** @param {boolean=} noRunDep */
  function asyncLoad(url, onload, onerror, noRunDep) {
      var dep = !noRunDep ? getUniqueRunDependency('al ' + url) : '';
      readAsync(url, function(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep);
      }, function(event) {
        if (onerror) {
          onerror();
        } else {
          throw 'Loading data file "' + url + '" failed.';
        }
      });
      if (dep) addRunDependency(dep);
    }
  var FS = {root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(path, opts = {}) => {
        path = PATH_FS.resolve(FS.cwd(), path);
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter((p) => !!p), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:(node) => {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:(parentid, name) => {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:(node) => {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:(node) => {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:(parent, name) => {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:(parent, name, mode, rdev) => {
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:(node) => {
        FS.hashRemoveNode(node);
      },isRoot:(node) => {
        return node === node.parent;
      },isMountpoint:(node) => {
        return !!node.mounted;
      },isFile:(mode) => {
        return (mode & 61440) === 32768;
      },isDir:(mode) => {
        return (mode & 61440) === 16384;
      },isLink:(mode) => {
        return (mode & 61440) === 40960;
      },isChrdev:(mode) => {
        return (mode & 61440) === 8192;
      },isBlkdev:(mode) => {
        return (mode & 61440) === 24576;
      },isFIFO:(mode) => {
        return (mode & 61440) === 4096;
      },isSocket:(mode) => {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"r+":2,"w":577,"w+":578,"a":1089,"a+":1090},modeStringToFlags:(str) => {
        var flags = FS.flagModes[str];
        if (typeof flags == 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:(flag) => {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:(node, perms) => {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },mayLookup:(dir) => {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },mayCreate:(dir, name) => {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:(dir, name, isdir) => {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },mayOpen:(node, flags) => {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:(fd_start = 0, fd_end = FS.MAX_OPEN_FDS) => {
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },getStream:(fd) => FS.streams[fd],createStream:(stream, fd_start, fd_end) => {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function(){};
          FS.FSStream.prototype = {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          };
        }
        // clone it, so we can return an instance of FSStream
        stream = Object.assign(new FS.FSStream(), stream);
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:(fd) => {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:(stream) => {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:() => {
          throw new FS.ErrnoError(70);
        }},major:(dev) => ((dev) >> 8),minor:(dev) => ((dev) & 0xff),makedev:(ma, mi) => ((ma) << 8 | (mi)),registerDevice:(dev, ops) => {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:(dev) => FS.devices[dev],getMounts:(mount) => {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:(populate, callback) => {
        if (typeof populate == 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err('warning: ' + FS.syncFSRequests + ' FS.syncfs operations in flight at once, probably just doing extra work');
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach((mount) => {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:(type, opts, mountpoint) => {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:(mountpoint) => {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach((hash) => {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1);
      },lookup:(parent, name) => {
        return parent.node_ops.lookup(parent, name);
      },mknod:(path, mode, dev) => {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:(path, mode) => {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:(path, mode) => {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdirTree:(path, mode) => {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },mkdev:(path, mode, dev) => {
        if (typeof dev == 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:(oldpath, newpath) => {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:(old_path, new_path) => {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },rmdir:(path) => {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },readdir:(path) => {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },unlink:(path) => {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },readlink:(path) => {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },stat:(path, dontFollow) => {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },lstat:(path) => {
        return FS.stat(path, true);
      },chmod:(path, mode, dontFollow) => {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:(path, mode) => {
        FS.chmod(path, mode, true);
      },fchmod:(fd, mode) => {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chmod(stream.node, mode);
      },chown:(path, uid, gid, dontFollow) => {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:(path, uid, gid) => {
        FS.chown(path, uid, gid, true);
      },fchown:(fd, uid, gid) => {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:(path, len) => {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:(fd, len) => {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },utime:(path, atime, mtime) => {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:(path, flags, mode, fd_start, fd_end) => {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags == 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode == 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path == 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },close:(stream) => {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },isClosed:(stream) => {
        return stream.fd === null;
      },llseek:(stream, offset, whence) => {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },read:(stream, buffer, offset, length, position) => {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:(stream, buffer, offset, length, position, canOwn) => {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },allocate:(stream, offset, length) => {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:(stream, address, length, position, prot, flags) => {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
      },msync:(stream, buffer, offset, length, mmapFlags) => {
        if (!stream || !stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },munmap:(stream) => 0,ioctl:(stream, cmd, arg) => {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:(path, opts = {}) => {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:(path, data, opts = {}) => {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },cwd:() => FS.currentPath,chdir:(path) => {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:() => {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },createDefaultDevices:() => {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (stream, buffer, offset, length, pos) => length,
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        var random_device = getRandomDevice();
        FS.createDevice('/dev', 'random', random_device);
        FS.createDevice('/dev', 'urandom', random_device);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createSpecialDirectories:() => {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount: () => {
            var node = FS.createNode(proc_self, 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup: (parent, name) => {
                var fd = +name;
                var stream = FS.getStream(fd);
                if (!stream) throw new FS.ErrnoError(8);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: () => stream.path },
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },createStandardStreams:() => {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
      },ensureErrnoError:() => {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
          };
          this.setErrno(errno);
          this.message = 'FS error';
  
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach((code) => {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:() => {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },init:(input, output, error) => {
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:() => {
        FS.init.initialized = false;
        // Call musl-internal function to close all stdio streams, so nothing is
        // left in internal buffers.
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:(canRead, canWrite) => {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },findObject:(path, dontResolveLastLink) => {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          return null;
        }
      },analyzePath:(path, dontResolveLastLink) => {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createPath:(parent, path, canRead, canWrite) => {
        parent = typeof parent == 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:(parent, name, properties, canRead, canWrite) => {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:(parent, name, data, canRead, canWrite, canOwn) => {
        var path = name;
        if (parent) {
          parent = typeof parent == 'string' ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data == 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:(parent, name, input, output) => {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: (stream) => {
            stream.seekable = false;
          },
          close: (stream) => {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: (stream, buffer, offset, length, pos /* ignored */) => {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: (stream, buffer, offset, length, pos) => {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },forceLoadFile:(obj) => {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest != 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
      },createLazyFile:(parent, name, url, canRead, canWrite) => {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (from, to) => {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            } else {
              return intArrayFromString(xhr.responseText || '', true);
            }
          };
          var lazyArray = this;
          lazyArray.setDataGetter((chunkNum) => {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') throw new Error('doXHR failed!');
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach((key) => {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            FS.forceLoadFile(node);
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency('cp ' + fullname); // might have several active requests for the same fullname
        function processData(byteArray) {
          function finish(byteArray) {
            if (preFinish) preFinish();
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency(dep);
          }
          if (Browser.handledByPreloadPlugin(byteArray, fullname, finish, () => {
            if (onerror) onerror();
            removeRunDependency(dep);
          })) {
            return;
          }
          finish(byteArray);
        }
        addRunDependency(dep);
        if (typeof url == 'string') {
          asyncLoad(url, (byteArray) => processData(byteArray), onerror);
        } else {
          processData(url);
        }
      },indexedDB:() => {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:() => {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:(paths, onload, onerror) => {
        onload = onload || (() => {});
        onerror = onerror || (() => {});
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = () => {
          out('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = () => {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach((path) => {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = () => { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = () => { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:(paths, onload, onerror) => {
        onload = onload || (() => {});
        onerror = onerror || (() => {});
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = () => {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach((path) => {
            var getRequest = files.get(path);
            getRequest.onsuccess = () => {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = () => { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};
  var SYSCALLS = {DEFAULT_POLLMASK:5,calculateAt:function(dirfd, path, allowEmpty) {
        if (path[0] === '/') {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = FS.getStream(dirfd);
          if (!dirstream) throw new FS.ErrnoError(8);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },doStat:function(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(4))>>2)] = 0;
        HEAP32[(((buf)+(8))>>2)] = stat.ino;
        HEAP32[(((buf)+(12))>>2)] = stat.mode;
        HEAP32[(((buf)+(16))>>2)] = stat.nlink;
        HEAP32[(((buf)+(20))>>2)] = stat.uid;
        HEAP32[(((buf)+(24))>>2)] = stat.gid;
        HEAP32[(((buf)+(28))>>2)] = stat.rdev;
        HEAP32[(((buf)+(32))>>2)] = 0;
        (tempI64 = [stat.size>>>0,(tempDouble=stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(40))>>2)] = tempI64[0],HEAP32[(((buf)+(44))>>2)] = tempI64[1]);
        HEAP32[(((buf)+(48))>>2)] = 4096;
        HEAP32[(((buf)+(52))>>2)] = stat.blocks;
        HEAP32[(((buf)+(56))>>2)] = (stat.atime.getTime() / 1000)|0;
        HEAP32[(((buf)+(60))>>2)] = 0;
        HEAP32[(((buf)+(64))>>2)] = (stat.mtime.getTime() / 1000)|0;
        HEAP32[(((buf)+(68))>>2)] = 0;
        HEAP32[(((buf)+(72))>>2)] = (stat.ctime.getTime() / 1000)|0;
        HEAP32[(((buf)+(76))>>2)] = 0;
        (tempI64 = [stat.ino>>>0,(tempDouble=stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((buf)+(80))>>2)] = tempI64[0],HEAP32[(((buf)+(84))>>2)] = tempI64[1]);
        return 0;
      },doMsync:function(addr, stream, len, flags, offset) {
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },doMkdir:function(path, mode) {
        // remove a trailing slash, if one - /a/b/ has basename of '', but
        // we want to create b in the context of this function
        path = PATH.normalize(path);
        if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
        FS.mkdir(path, mode, 0);
        return 0;
      },doMknod:function(path, mode, dev) {
        // we don't want this in the JS API as it uses mknod to create all nodes.
        switch (mode & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default: return -28;
        }
        FS.mknod(path, mode, dev);
        return 0;
      },doReadlink:function(path, buf, bufsize) {
        if (bufsize <= 0) return -28;
        var ret = FS.readlink(path);
  
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf+len];
        stringToUTF8(ret, buf, bufsize+1);
        // readlink is one of the rare functions that write out a C string, but does never append a null to the output buffer(!)
        // stringToUTF8() always appends a null byte, so restore the character under the null byte after the write.
        HEAP8[buf+len] = endChar;
  
        return len;
      },doAccess:function(path, amode) {
        if (amode & ~7) {
          // need a valid mode
          return -28;
        }
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node) {
          return -44;
        }
        var perms = '';
        if (amode & 4) perms += 'r';
        if (amode & 2) perms += 'w';
        if (amode & 1) perms += 'x';
        if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
          return -2;
        }
        return 0;
      },doDup:function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest) FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
      },doReadv:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.read(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      },doWritev:function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = HEAP32[(((iov)+(i*8))>>2)];
          var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
          var curr = FS.write(stream, HEAP8,ptr, len, offset);
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },getStreamFromFD:function(fd) {
        var stream = FS.getStream(fd);
        if (!stream) throw new FS.ErrnoError(8);
        return stream;
      },get64:function(low, high) {
        return low;
      }};
  function ___syscall_dup3(fd, suggestFD, flags) {
  try {
  
      var old = SYSCALLS.getStreamFromFD(fd);
      if (old.fd === suggestFD) return -28;
      return SYSCALLS.doDup(old.path, old.flags, suggestFD);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_faccessat(dirfd, path, amode, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      return SYSCALLS.doAccess(path, amode);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function setErrNo(value) {
      HEAP32[((___errno_location())>>2)] = value;
      return value;
    }
  function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          var newStream;
          newStream = FS.open(stream.path, stream.flags, 0, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 5:
        /* case 5: Currently in musl F_GETLK64 has same value as F_GETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */ {
          
          var arg = SYSCALLS.get();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 6:
        case 7:
        /* case 6: Currently in musl F_SETLK64 has same value as F_SETLK, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
        /* case 7: Currently in musl F_SETLKW64 has same value as F_SETLKW, so omitted to avoid duplicate case blocks. If that changes, uncomment this */
          
          
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fnctl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_fstat64(fd, buf) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      return SYSCALLS.doStat(FS.stat, stream.path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_fstatat64(dirfd, path, buf, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      var nofollow = flags & 256;
      var allowEmpty = flags & 4096;
      flags = flags & (~4352);
      path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
      return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_getdents64(fd, dirp, count) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd)
      if (!stream.getdents) {
        stream.getdents = FS.readdir(stream.path);
      }
  
      var struct_size = 280;
      var pos = 0;
      var off = FS.llseek(stream, 0, 1);
  
      var idx = Math.floor(off / struct_size);
  
      while (idx < stream.getdents.length && pos + struct_size <= count) {
        var id;
        var type;
        var name = stream.getdents[idx];
        if (name === '.') {
          id = stream.node.id;
          type = 4; // DT_DIR
        }
        else if (name === '..') {
          var lookup = FS.lookupPath(stream.path, { parent: true });
          id = lookup.node.id;
          type = 4; // DT_DIR
        }
        else {
          var child = FS.lookupNode(stream.node, name);
          id = child.id;
          type = FS.isChrdev(child.mode) ? 2 :  // DT_CHR, character device.
                 FS.isDir(child.mode) ? 4 :     // DT_DIR, directory.
                 FS.isLink(child.mode) ? 10 :   // DT_LNK, symbolic link.
                 8;                             // DT_REG, regular file.
        }
        (tempI64 = [id>>>0,(tempDouble=id,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((dirp + pos)>>2)] = tempI64[0],HEAP32[(((dirp + pos)+(4))>>2)] = tempI64[1]);
        (tempI64 = [(idx + 1) * struct_size>>>0,(tempDouble=(idx + 1) * struct_size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((dirp + pos)+(8))>>2)] = tempI64[0],HEAP32[(((dirp + pos)+(12))>>2)] = tempI64[1]);
        HEAP16[(((dirp + pos)+(16))>>1)] = 280;
        HEAP8[(((dirp + pos)+(18))>>0)] = type;
        stringToUTF8(name, dirp + pos + 19, 256);
        pos += struct_size;
        idx += 1;
      }
      FS.llseek(stream, idx * struct_size, 0);
      return pos;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509:
        case 21505: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.get();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.get();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        default: abort('bad ioctl syscall ' + op);
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_lstat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.lstat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_open(path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var pathname = SYSCALLS.getStr(path);
      var mode = varargs ? SYSCALLS.get() : 0;
      var stream = FS.open(pathname, flags, mode);
      return stream.fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_rename(old_path, new_path) {
  try {
  
      old_path = SYSCALLS.getStr(old_path);
      new_path = SYSCALLS.getStr(new_path);
      FS.rename(old_path, new_path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_rmdir(path) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.rmdir(path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_stat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.doStat(FS.stat, path, buf);
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function ___syscall_unlink(path) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.unlink(path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return -e.errno;
  }
  }

  function __gmtime_js(time, tmPtr) {
      var date = new Date(HEAP32[((time)>>2)]*1000);
      HEAP32[((tmPtr)>>2)] = date.getUTCSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getUTCMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getUTCHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getUTCDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getUTCMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getUTCFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getUTCDay();
      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var yday = ((date.getTime() - start) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
    }

  function __localtime_js(time, tmPtr) {
      var date = new Date(HEAP32[((time)>>2)]*1000);
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
  
      var start = new Date(date.getFullYear(), 0, 1);
      var yday = ((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      HEAP32[(((tmPtr)+(36))>>2)] = -(date.getTimezoneOffset() * 60);
  
      // Attention: DST is in December in South, and some regions don't have DST at all.
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset))|0;
      HEAP32[(((tmPtr)+(32))>>2)] = dst;
    }

  function __mktime_js(tmPtr) {
      var date = new Date(HEAP32[(((tmPtr)+(20))>>2)] + 1900,
                          HEAP32[(((tmPtr)+(16))>>2)],
                          HEAP32[(((tmPtr)+(12))>>2)],
                          HEAP32[(((tmPtr)+(8))>>2)],
                          HEAP32[(((tmPtr)+(4))>>2)],
                          HEAP32[((tmPtr)>>2)],
                          0);
  
      // There's an ambiguous hour when the time goes back; the tm_isdst field is
      // used to disambiguate it.  Date() basically guesses, so we fix it up if it
      // guessed wrong, or fill in tm_isdst with the guess if it's -1.
      var dst = HEAP32[(((tmPtr)+(32))>>2)];
      var guessedOffset = date.getTimezoneOffset();
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dstOffset = Math.min(winterOffset, summerOffset); // DST is in December in South
      if (dst < 0) {
        // Attention: some regions don't have DST at all.
        HEAP32[(((tmPtr)+(32))>>2)] = Number(summerOffset != winterOffset && dstOffset == guessedOffset);
      } else if ((dst > 0) != (dstOffset == guessedOffset)) {
        var nonDstOffset = Math.max(winterOffset, summerOffset);
        var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
        // Don't try setMinutes(date.getMinutes() + ...) -- it's messed up.
        date.setTime(date.getTime() + (trueOffset - guessedOffset)*60000);
      }
  
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
      var yday = ((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      // To match expected behavior, update fields from date
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
  
      return (date.getTime() / 1000)|0;
    }

  function _tzset_impl(timezone, daylight, tzname) {
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
  
      // Local standard timezone offset. Local standard time is not adjusted for daylight savings.
      // This code uses the fact that getTimezoneOffset returns a greater value during Standard Time versus Daylight Saving Time (DST).
      // Thus it determines the expected output during Standard Time, and it compares whether the output of the given date the same (Standard) or less (DST).
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  
      // timezone is specified as seconds west of UTC ("The external variable
      // `timezone` shall be set to the difference, in seconds, between
      // Coordinated Universal Time (UTC) and local standard time."), the same
      // as returned by stdTimezoneOffset.
      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
      HEAP32[((timezone)>>2)] = stdTimezoneOffset * 60;
  
      HEAP32[((daylight)>>2)] = Number(winterOffset != summerOffset);
  
      function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT";
      };
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      var winterNamePtr = allocateUTF8(winterName);
      var summerNamePtr = allocateUTF8(summerName);
      if (summerOffset < winterOffset) {
        // Northern hemisphere
        HEAP32[((tzname)>>2)] = winterNamePtr;
        HEAP32[(((tzname)+(4))>>2)] = summerNamePtr;
      } else {
        HEAP32[((tzname)>>2)] = summerNamePtr;
        HEAP32[(((tzname)+(4))>>2)] = winterNamePtr;
      }
    }
  function __tzset_js(timezone, daylight, tzname) {
      // TODO: Use (malleable) environment variables instead of system settings.
      if (__tzset_js.called) return;
      __tzset_js.called = true;
      _tzset_impl(timezone, daylight, tzname);
    }

  function _abort() {
      abort('');
    }

  function _clock() {
      if (_clock.start === undefined) _clock.start = Date.now();
      return ((Date.now() - _clock.start) * (1000000 / 1000))|0;
    }

  var _emscripten_get_now;if (ENVIRONMENT_IS_NODE) {
    _emscripten_get_now = () => {
      var t = process['hrtime']();
      return t[0] * 1e3 + t[1] / 1e6;
    };
  } else _emscripten_get_now = () => performance.now();
  ;
  
  var _emscripten_get_now_is_monotonic = true;;
  function _clock_gettime(clk_id, tp) {
      // int clock_gettime(clockid_t clk_id, struct timespec *tp);
      var now;
      if (clk_id === 0) {
        now = Date.now();
      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now();
      } else {
        setErrNo(28);
        return -1;
      }
      HEAP32[((tp)>>2)] = (now/1000)|0; // seconds
      HEAP32[(((tp)+(4))>>2)] = ((now % 1000)*1000*1000)|0; // nanoseconds
      return 0;
    }


  function _emscripten_get_heap_max() {
      // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
      // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
      // for any code that deals with heap sizes, which would require special
      // casing all heap size related code to treat 0 specially.
      return 2147483648;
    }
  
  function emscripten_realloc_buffer(size) {
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow((size - buffer.byteLength + 65535) >>> 16); // .grow() takes a delta compared to the previous size
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1 /*success*/;
      } catch(e) {
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    }
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      // With pthreads, races can happen (another thread might increase the size
      // in between), so return a failure, and let the caller retry.
  
      // Memory resize rules:
      // 1.  Always increase heap size to at least the requested size, rounded up
      //     to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
      //     geometrically: increase the heap size according to
      //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
      //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
      //     linearly: increase the heap size by at least
      //     MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
      //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4.  If we were unable to allocate as much memory, it may be due to
      //     over-eager decision to excessively reserve due to (3) above.
      //     Hence if an allocation fails, cut down on the amount of excess
      //     growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = _emscripten_get_heap_max();
      if (requestedSize > maxHeapSize) {
        return false;
      }
  
      let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
  
      // Loop through potential heap size increases. If we attempt a too eager
      // reservation that fails, cut down on the attempted size and reserve a
      // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
  
          return true;
        }
      }
      return false;
    }

  var ENV = {};
  
  function getExecutableName() {
      return thisProgram || './this.program';
    }
  function getEnvStrings() {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator == 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          // x is a key in ENV; if ENV[x] is undefined, that means it was
          // explicitly set to be so. We allow user code to do that to
          // force variables with default values to remain unset.
          if (ENV[x] === undefined) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + '=' + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
  function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[(((__environ)+(i * 4))>>2)] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }

  function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAP32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    }

  function _fd_close(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return e.errno;
  }
  }

  function _fd_fdstat_get(fd, pbuf) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      // All character devices are terminals (other things a Linux system would
      // assume is a character device, like the mouse, we have special APIs for).
      var type = stream.tty ? 2 :
                 FS.isDir(stream.mode) ? 3 :
                 FS.isLink(stream.mode) ? 7 :
                 4;
      HEAP8[((pbuf)>>0)] = type;
      // TODO HEAP16[(((pbuf)+(2))>>1)] = ?;
      // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(8))>>2)] = tempI64[0],HEAP32[(((pbuf)+(12))>>2)] = tempI64[1]);
      // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(16))>>2)] = tempI64[0],HEAP32[(((pbuf)+(20))>>2)] = tempI64[1]);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return e.errno;
  }
  }

  function _fd_read(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doReadv(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return e.errno;
  }
  }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  try {
  
      
      var stream = SYSCALLS.getStreamFromFD(fd);
      var HIGH_OFFSET = 0x100000000; // 2^32
      // use an unsigned operator on low and shift high by 32-bits
      var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  
      var DOUBLE_LIMIT = 0x20000000000000; // 2^53
      // we also check for equality since DOUBLE_LIMIT + 1 == DOUBLE_LIMIT
      if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
        return -61;
      }
  
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble=stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((newOffset)>>2)] = tempI64[0],HEAP32[(((newOffset)+(4))>>2)] = tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return e.errno;
  }
  }

  function _fd_write(fd, iov, iovcnt, pnum) {
  try {
  
      ;
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = SYSCALLS.doWritev(stream, iov, iovcnt);
      HEAP32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e instanceof FS.ErrnoError)) throw e;
    return e.errno;
  }
  }

  function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[((ptr)>>2)] = (now/1000)|0; // seconds
      HEAP32[(((ptr)+(4))>>2)] = ((now % 1000)*1000)|0; // microseconds
      return 0;
    }

  function _setTempRet0(val) {
      setTempRet0(val);
    }

  function __isLeapYear(year) {
        return year%4 === 0 && (year%100 !== 0 || year%400 === 0);
    }
  
  function __arraySum(array, index) {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    }
  
  var __MONTH_DAYS_LEAP = [31,29,31,30,31,30,31,31,30,31,30,31];
  
  var __MONTH_DAYS_REGULAR = [31,28,31,30,31,30,31,31,30,31,30,31];
  function __addDays(date, days) {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    }
  function _strftime(s, maxsize, format, tm) {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAP32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value == 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            } else {
              return thisDate.getFullYear();
            }
          } else {
            return thisDate.getFullYear()-1;
          }
      }
  
      var EXPANSION_RULES_2 = {
        '%a': function(date) {
          return WEEKDAYS[date.tm_wday].substring(0,3);
        },
        '%A': function(date) {
          return WEEKDAYS[date.tm_wday];
        },
        '%b': function(date) {
          return MONTHS[date.tm_mon].substring(0,3);
        },
        '%B': function(date) {
          return MONTHS[date.tm_mon];
        },
        '%C': function(date) {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': function(date) {
          return leadingNulls(date.tm_mday, 2);
        },
        '%e': function(date) {
          return leadingSomething(date.tm_mday, 2, ' ');
        },
        '%g': function(date) {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': function(date) {
          return getWeekBasedYear(date);
        },
        '%H': function(date) {
          return leadingNulls(date.tm_hour, 2);
        },
        '%I': function(date) {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': function(date) {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday+__arraySum(__isLeapYear(date.tm_year+1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': function(date) {
          return leadingNulls(date.tm_mon+1, 2);
        },
        '%M': function(date) {
          return leadingNulls(date.tm_min, 2);
        },
        '%n': function() {
          return '\n';
        },
        '%p': function(date) {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          } else {
            return 'PM';
          }
        },
        '%S': function(date) {
          return leadingNulls(date.tm_sec, 2);
        },
        '%t': function() {
          return '\t';
        },
        '%u': function(date) {
          return date.tm_wday || 7;
        },
        '%U': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Sunday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year+1900, 0, 1);
          var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7-janFirst.getDay());
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Sunday?
          if (compareByDay(firstSunday, endDate) < 0) {
            // calculate difference in days between first Sunday and endDate
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstSundayUntilEndJanuary = 31-firstSunday.getDate();
            var days = firstSundayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
  
          return compareByDay(firstSunday, janFirst) === 0 ? '01': '00';
        },
        '%V': function(date) {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var janFourthThisYear = new Date(date.tm_year+1900, 0, 4);
          var janFourthNextYear = new Date(date.tm_year+1901, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          var endDate = __addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
            // if given date is before this years first week, then it belongs to the 53rd week of last year
            return '53';
          }
  
          if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
            // if given date is after next years first week, then it belongs to the 01th week of next year
            return '01';
          }
  
          // given date is in between CW 01..53 of this calendar year
          var daysDifference;
          if (firstWeekStartThisYear.getFullYear() < date.tm_year+1900) {
            // first CW of this year starts last year
            daysDifference = date.tm_yday+32-firstWeekStartThisYear.getDate()
          } else {
            // first CW of this year starts this year
            daysDifference = date.tm_yday+1-firstWeekStartThisYear.getDate();
          }
          return leadingNulls(Math.ceil(daysDifference/7), 2);
        },
        '%w': function(date) {
          return date.tm_wday;
        },
        '%W': function(date) {
          // Replaced by the week number of the year as a decimal number [00,53].
          // The first Monday of January is the first day of week 1;
          // days in the new year before this are in week 0. [ tm_year, tm_wday, tm_yday]
          var janFirst = new Date(date.tm_year, 0, 1);
          var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7-janFirst.getDay()+1);
          var endDate = new Date(date.tm_year+1900, date.tm_mon, date.tm_mday);
  
          // is target date after the first Monday?
          if (compareByDay(firstMonday, endDate) < 0) {
            var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth()-1)-31;
            var firstMondayUntilEndJanuary = 31-firstMonday.getDate();
            var days = firstMondayUntilEndJanuary+februaryFirstUntilEndMonth+endDate.getDate();
            return leadingNulls(Math.ceil(days/7), 2);
          }
          return compareByDay(firstMonday, janFirst) === 0 ? '01': '00';
        },
        '%y': function(date) {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        '%Y': function(date) {
          // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
          return date.tm_year+1900;
        },
        '%z': function(date) {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': function(date) {
          return date.tm_zone;
        },
        '%%': function() {
          return '%';
        }
      };
  
      // Replace %% with a pair of NULLs (which cannot occur in a C string), then
      // re-inject them after processing.
      pattern = pattern.replace(/%%/g, '\0\0')
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
      pattern = pattern.replace(/\0\0/g, '%')
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    }

  function runAndAbortIfError(func) {
      try {
        return func();
      } catch (e) {
        abort(e);
      }
    }
  
  /** @param {boolean=} synchronous */
  function callUserCallback(func, synchronous) {
      if (runtimeExited || ABORT) {
        return;
      }
      // For synchronous calls, let any exceptions propagate, and don't let the runtime exit.
      if (synchronous) {
        func();
        return;
      }
      try {
        func();
      } catch (e) {
        handleException(e);
      }
    }
  
  function runtimeKeepalivePush() {
      runtimeKeepaliveCounter += 1;
    }
  
  function runtimeKeepalivePop() {
      runtimeKeepaliveCounter -= 1;
    }
  var Asyncify = {State:{Normal:0,Unwinding:1,Rewinding:2,Disabled:3},state:0,StackSize:1048576,currData:null,handleSleepReturnValue:0,exportCallStack:[],callStackNameToId:{},callStackIdToName:{},callStackId:0,asyncPromiseHandlers:null,sleepCallbacks:[],getCallStackId:function(funcName) {
        var id = Asyncify.callStackNameToId[funcName];
        if (id === undefined) {
          id = Asyncify.callStackId++;
          Asyncify.callStackNameToId[funcName] = id;
          Asyncify.callStackIdToName[id] = funcName;
        }
        return id;
      },instrumentWasmExports:function(exports) {
        var ret = {};
        for (var x in exports) {
          (function(x) {
            var original = exports[x];
            if (typeof original == 'function') {
              ret[x] = function() {
                Asyncify.exportCallStack.push(x);
                try {
                  return original.apply(null, arguments);
                } finally {
                  if (!ABORT) {
                    var y = Asyncify.exportCallStack.pop();
                    assert(y === x);
                    Asyncify.maybeStopUnwind();
                  }
                }
              };
            } else {
              ret[x] = original;
            }
          })(x);
        }
        return ret;
      },maybeStopUnwind:function() {
        if (Asyncify.currData &&
            Asyncify.state === Asyncify.State.Unwinding &&
            Asyncify.exportCallStack.length === 0) {
          // We just finished unwinding.
          
          Asyncify.state = Asyncify.State.Normal;
          // Keep the runtime alive so that a re-wind can be done later.
          runAndAbortIfError(Module['_asyncify_stop_unwind']);
          if (typeof Fibers != 'undefined') {
            Fibers.trampoline();
          }
        }
      },whenDone:function() {
        return new Promise((resolve, reject) => {
          Asyncify.asyncPromiseHandlers = {
            resolve: resolve,
            reject: reject
          };
        });
      },allocateData:function() {
        // An asyncify data structure has three fields:
        //  0  current stack pos
        //  4  max stack pos
        //  8  id of function at bottom of the call stack (callStackIdToName[id] == name of js function)
        //
        // The Asyncify ABI only interprets the first two fields, the rest is for the runtime.
        // We also embed a stack in the same memory region here, right next to the structure.
        // This struct is also defined as asyncify_data_t in emscripten/fiber.h
        var ptr = _malloc(12 + Asyncify.StackSize);
        Asyncify.setDataHeader(ptr, ptr + 12, Asyncify.StackSize);
        Asyncify.setDataRewindFunc(ptr);
        return ptr;
      },setDataHeader:function(ptr, stack, stackSize) {
        HEAP32[((ptr)>>2)] = stack;
        HEAP32[(((ptr)+(4))>>2)] = stack + stackSize;
      },setDataRewindFunc:function(ptr) {
        var bottomOfCallStack = Asyncify.exportCallStack[0];
        var rewindId = Asyncify.getCallStackId(bottomOfCallStack);
        HEAP32[(((ptr)+(8))>>2)] = rewindId;
      },getDataRewindFunc:function(ptr) {
        var id = HEAP32[(((ptr)+(8))>>2)];
        var name = Asyncify.callStackIdToName[id];
        var func = Module['asm'][name];
        return func;
      },doRewind:function(ptr) {
        var start = Asyncify.getDataRewindFunc(ptr);
        // Once we have rewound and the stack we no longer need to artificially keep
        // the runtime alive.
        
        return start();
      },handleSleep:function(startAsync) {
        if (ABORT) return;
        if (Asyncify.state === Asyncify.State.Normal) {
          // Prepare to sleep. Call startAsync, and see what happens:
          // if the code decided to call our callback synchronously,
          // then no async operation was in fact begun, and we don't
          // need to do anything.
          var reachedCallback = false;
          var reachedAfterCallback = false;
          startAsync((handleSleepReturnValue) => {
            if (ABORT) return;
            Asyncify.handleSleepReturnValue = handleSleepReturnValue || 0;
            reachedCallback = true;
            if (!reachedAfterCallback) {
              // We are happening synchronously, so no need for async.
              return;
            }
            Asyncify.state = Asyncify.State.Rewinding;
            runAndAbortIfError(() => Module['_asyncify_start_rewind'](Asyncify.currData));
            if (typeof Browser != 'undefined' && Browser.mainLoop.func) {
              Browser.mainLoop.resume();
            }
            var asyncWasmReturnValue, isError = false;
            try {
              asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData);
            } catch (err) {
              asyncWasmReturnValue = err;
              isError = true;
            }
            // Track whether the return value was handled by any promise handlers.
            var handled = false;
            if (!Asyncify.currData) {
              // All asynchronous execution has finished.
              // `asyncWasmReturnValue` now contains the final
              // return value of the exported async WASM function.
              //
              // Note: `asyncWasmReturnValue` is distinct from
              // `Asyncify.handleSleepReturnValue`.
              // `Asyncify.handleSleepReturnValue` contains the return
              // value of the last C function to have executed
              // `Asyncify.handleSleep()`, where as `asyncWasmReturnValue`
              // contains the return value of the exported WASM function
              // that may have called C functions that
              // call `Asyncify.handleSleep()`.
              var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
              if (asyncPromiseHandlers) {
                Asyncify.asyncPromiseHandlers = null;
                (isError ? asyncPromiseHandlers.reject : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
                handled = true;
              }
            }
            if (isError && !handled) {
              // If there was an error and it was not handled by now, we have no choice but to
              // rethrow that error into the global scope where it can be caught only by
              // `onerror` or `onunhandledpromiserejection`.
              throw asyncWasmReturnValue;
            }
          });
          reachedAfterCallback = true;
          if (!reachedCallback) {
            // A true async operation was begun; start a sleep.
            Asyncify.state = Asyncify.State.Unwinding;
            // TODO: reuse, don't alloc/free every sleep
            Asyncify.currData = Asyncify.allocateData();
            runAndAbortIfError(() => Module['_asyncify_start_unwind'](Asyncify.currData));
            if (typeof Browser != 'undefined' && Browser.mainLoop.func) {
              Browser.mainLoop.pause();
            }
          }
        } else if (Asyncify.state === Asyncify.State.Rewinding) {
          // Stop a resume.
          Asyncify.state = Asyncify.State.Normal;
          runAndAbortIfError(Module['_asyncify_stop_rewind']);
          _free(Asyncify.currData);
          Asyncify.currData = null;
          // Call all sleep callbacks now that the sleep-resume is all done.
          Asyncify.sleepCallbacks.forEach((func) => callUserCallback(func));
        } else {
          abort('invalid state: ' + Asyncify.state);
        }
        return Asyncify.handleSleepReturnValue;
      },handleAsync:function(startAsync) {
        return Asyncify.handleSleep((wakeUp) => {
          // TODO: add error handling as a second param when handleSleep implements it.
          startAsync().then(wakeUp);
        });
      }};

  var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.staticInit();;
var ASSERTIONS = false;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


var asmLibraryArg = {
  "__syscall_dup3": ___syscall_dup3,
  "__syscall_faccessat": ___syscall_faccessat,
  "__syscall_fcntl64": ___syscall_fcntl64,
  "__syscall_fstat64": ___syscall_fstat64,
  "__syscall_fstatat64": ___syscall_fstatat64,
  "__syscall_getdents64": ___syscall_getdents64,
  "__syscall_ioctl": ___syscall_ioctl,
  "__syscall_lstat64": ___syscall_lstat64,
  "__syscall_open": ___syscall_open,
  "__syscall_rename": ___syscall_rename,
  "__syscall_rmdir": ___syscall_rmdir,
  "__syscall_stat64": ___syscall_stat64,
  "__syscall_unlink": ___syscall_unlink,
  "_gmtime_js": __gmtime_js,
  "_localtime_js": __localtime_js,
  "_mktime_js": __mktime_js,
  "_tzset_js": __tzset_js,
  "abort": _abort,
  "clock": _clock,
  "clock_gettime": _clock_gettime,
  "emfiberthreads_pthread_mutex_timedwait_clearTimeout": emfiberthreads_pthread_mutex_timedwait_clearTimeout,
  "emfiberthreads_pthread_mutex_timedwait_setTimeout": emfiberthreads_pthread_mutex_timedwait_setTimeout,
  "emscripten_get_now": _emscripten_get_now,
  "emscripten_resize_heap": _emscripten_resize_heap,
  "environ_get": _environ_get,
  "environ_sizes_get": _environ_sizes_get,
  "fd_close": _fd_close,
  "fd_fdstat_get": _fd_fdstat_get,
  "fd_read": _fd_read,
  "fd_seek": _fd_seek,
  "fd_write": _fd_write,
  "gettimeofday": _gettimeofday,
  "libavjs_wait_reader": libavjs_wait_reader,
  "setTempRet0": _setTempRet0,
  "strftime": _strftime,
  "writeoutEmscriptenOOM": writeoutEmscriptenOOM
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
  return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["__wasm_call_ctors"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _ff_nothing = Module["_ff_nothing"] = function() {
  return (_ff_nothing = Module["_ff_nothing"] = Module["asm"]["ff_nothing"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_crop_bottom = Module["_AVFrame_crop_bottom"] = function() {
  return (_AVFrame_crop_bottom = Module["_AVFrame_crop_bottom"] = Module["asm"]["AVFrame_crop_bottom"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_crop_bottom_s = Module["_AVFrame_crop_bottom_s"] = function() {
  return (_AVFrame_crop_bottom_s = Module["_AVFrame_crop_bottom_s"] = Module["asm"]["AVFrame_crop_bottom_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_crop_left = Module["_AVFrame_crop_left"] = function() {
  return (_AVFrame_crop_left = Module["_AVFrame_crop_left"] = Module["asm"]["AVFrame_crop_left"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_crop_left_s = Module["_AVFrame_crop_left_s"] = function() {
  return (_AVFrame_crop_left_s = Module["_AVFrame_crop_left_s"] = Module["asm"]["AVFrame_crop_left_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_crop_right = Module["_AVFrame_crop_right"] = function() {
  return (_AVFrame_crop_right = Module["_AVFrame_crop_right"] = Module["asm"]["AVFrame_crop_right"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_crop_right_s = Module["_AVFrame_crop_right_s"] = function() {
  return (_AVFrame_crop_right_s = Module["_AVFrame_crop_right_s"] = Module["asm"]["AVFrame_crop_right_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_crop_top = Module["_AVFrame_crop_top"] = function() {
  return (_AVFrame_crop_top = Module["_AVFrame_crop_top"] = Module["asm"]["AVFrame_crop_top"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_crop_top_s = Module["_AVFrame_crop_top_s"] = function() {
  return (_AVFrame_crop_top_s = Module["_AVFrame_crop_top_s"] = Module["asm"]["AVFrame_crop_top_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_data_a = Module["_AVFrame_data_a"] = function() {
  return (_AVFrame_data_a = Module["_AVFrame_data_a"] = Module["asm"]["AVFrame_data_a"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_data_a_s = Module["_AVFrame_data_a_s"] = function() {
  return (_AVFrame_data_a_s = Module["_AVFrame_data_a_s"] = Module["asm"]["AVFrame_data_a_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_format = Module["_AVFrame_format"] = function() {
  return (_AVFrame_format = Module["_AVFrame_format"] = Module["asm"]["AVFrame_format"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_format_s = Module["_AVFrame_format_s"] = function() {
  return (_AVFrame_format_s = Module["_AVFrame_format_s"] = Module["asm"]["AVFrame_format_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_height = Module["_AVFrame_height"] = function() {
  return (_AVFrame_height = Module["_AVFrame_height"] = Module["asm"]["AVFrame_height"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_height_s = Module["_AVFrame_height_s"] = function() {
  return (_AVFrame_height_s = Module["_AVFrame_height_s"] = Module["asm"]["AVFrame_height_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_key_frame = Module["_AVFrame_key_frame"] = function() {
  return (_AVFrame_key_frame = Module["_AVFrame_key_frame"] = Module["asm"]["AVFrame_key_frame"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_key_frame_s = Module["_AVFrame_key_frame_s"] = function() {
  return (_AVFrame_key_frame_s = Module["_AVFrame_key_frame_s"] = Module["asm"]["AVFrame_key_frame_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_linesize_a = Module["_AVFrame_linesize_a"] = function() {
  return (_AVFrame_linesize_a = Module["_AVFrame_linesize_a"] = Module["asm"]["AVFrame_linesize_a"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_linesize_a_s = Module["_AVFrame_linesize_a_s"] = function() {
  return (_AVFrame_linesize_a_s = Module["_AVFrame_linesize_a_s"] = Module["asm"]["AVFrame_linesize_a_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_nb_samples = Module["_AVFrame_nb_samples"] = function() {
  return (_AVFrame_nb_samples = Module["_AVFrame_nb_samples"] = Module["asm"]["AVFrame_nb_samples"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_nb_samples_s = Module["_AVFrame_nb_samples_s"] = function() {
  return (_AVFrame_nb_samples_s = Module["_AVFrame_nb_samples_s"] = Module["asm"]["AVFrame_nb_samples_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_pict_type = Module["_AVFrame_pict_type"] = function() {
  return (_AVFrame_pict_type = Module["_AVFrame_pict_type"] = Module["asm"]["AVFrame_pict_type"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_pict_type_s = Module["_AVFrame_pict_type_s"] = function() {
  return (_AVFrame_pict_type_s = Module["_AVFrame_pict_type_s"] = Module["asm"]["AVFrame_pict_type_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_pts = Module["_AVFrame_pts"] = function() {
  return (_AVFrame_pts = Module["_AVFrame_pts"] = Module["asm"]["AVFrame_pts"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_ptshi = Module["_AVFrame_ptshi"] = function() {
  return (_AVFrame_ptshi = Module["_AVFrame_ptshi"] = Module["asm"]["AVFrame_ptshi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_pts_s = Module["_AVFrame_pts_s"] = function() {
  return (_AVFrame_pts_s = Module["_AVFrame_pts_s"] = Module["asm"]["AVFrame_pts_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_ptshi_s = Module["_AVFrame_ptshi_s"] = function() {
  return (_AVFrame_ptshi_s = Module["_AVFrame_ptshi_s"] = Module["asm"]["AVFrame_ptshi_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_sample_rate = Module["_AVFrame_sample_rate"] = function() {
  return (_AVFrame_sample_rate = Module["_AVFrame_sample_rate"] = Module["asm"]["AVFrame_sample_rate"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_sample_rate_s = Module["_AVFrame_sample_rate_s"] = function() {
  return (_AVFrame_sample_rate_s = Module["_AVFrame_sample_rate_s"] = Module["asm"]["AVFrame_sample_rate_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_width = Module["_AVFrame_width"] = function() {
  return (_AVFrame_width = Module["_AVFrame_width"] = Module["asm"]["AVFrame_width"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_width_s = Module["_AVFrame_width_s"] = function() {
  return (_AVFrame_width_s = Module["_AVFrame_width_s"] = Module["asm"]["AVFrame_width_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_sample_aspect_ratio_num = Module["_AVFrame_sample_aspect_ratio_num"] = function() {
  return (_AVFrame_sample_aspect_ratio_num = Module["_AVFrame_sample_aspect_ratio_num"] = Module["asm"]["AVFrame_sample_aspect_ratio_num"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_sample_aspect_ratio_den = Module["_AVFrame_sample_aspect_ratio_den"] = function() {
  return (_AVFrame_sample_aspect_ratio_den = Module["_AVFrame_sample_aspect_ratio_den"] = Module["asm"]["AVFrame_sample_aspect_ratio_den"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_sample_aspect_ratio_num_s = Module["_AVFrame_sample_aspect_ratio_num_s"] = function() {
  return (_AVFrame_sample_aspect_ratio_num_s = Module["_AVFrame_sample_aspect_ratio_num_s"] = Module["asm"]["AVFrame_sample_aspect_ratio_num_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_sample_aspect_ratio_den_s = Module["_AVFrame_sample_aspect_ratio_den_s"] = function() {
  return (_AVFrame_sample_aspect_ratio_den_s = Module["_AVFrame_sample_aspect_ratio_den_s"] = Module["asm"]["AVFrame_sample_aspect_ratio_den_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_sample_aspect_ratio_s = Module["_AVFrame_sample_aspect_ratio_s"] = function() {
  return (_AVFrame_sample_aspect_ratio_s = Module["_AVFrame_sample_aspect_ratio_s"] = Module["asm"]["AVFrame_sample_aspect_ratio_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_time_base_num = Module["_AVFrame_time_base_num"] = function() {
  return (_AVFrame_time_base_num = Module["_AVFrame_time_base_num"] = Module["asm"]["AVFrame_time_base_num"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_time_base_den = Module["_AVFrame_time_base_den"] = function() {
  return (_AVFrame_time_base_den = Module["_AVFrame_time_base_den"] = Module["asm"]["AVFrame_time_base_den"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_time_base_num_s = Module["_AVFrame_time_base_num_s"] = function() {
  return (_AVFrame_time_base_num_s = Module["_AVFrame_time_base_num_s"] = Module["asm"]["AVFrame_time_base_num_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_time_base_den_s = Module["_AVFrame_time_base_den_s"] = function() {
  return (_AVFrame_time_base_den_s = Module["_AVFrame_time_base_den_s"] = Module["asm"]["AVFrame_time_base_den_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_time_base_s = Module["_AVFrame_time_base_s"] = function() {
  return (_AVFrame_time_base_s = Module["_AVFrame_time_base_s"] = Module["asm"]["AVFrame_time_base_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_channel_layoutmask_s = Module["_AVFrame_channel_layoutmask_s"] = function() {
  return (_AVFrame_channel_layoutmask_s = Module["_AVFrame_channel_layoutmask_s"] = Module["asm"]["AVFrame_channel_layoutmask_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_channel_layoutmask = Module["_AVFrame_channel_layoutmask"] = function() {
  return (_AVFrame_channel_layoutmask = Module["_AVFrame_channel_layoutmask"] = Module["asm"]["AVFrame_channel_layoutmask"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_channels = Module["_AVFrame_channels"] = function() {
  return (_AVFrame_channels = Module["_AVFrame_channels"] = Module["asm"]["AVFrame_channels"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_channels_s = Module["_AVFrame_channels_s"] = function() {
  return (_AVFrame_channels_s = Module["_AVFrame_channels_s"] = Module["asm"]["AVFrame_channels_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_ch_layout_nb_channels = Module["_AVFrame_ch_layout_nb_channels"] = function() {
  return (_AVFrame_ch_layout_nb_channels = Module["_AVFrame_ch_layout_nb_channels"] = Module["asm"]["AVFrame_ch_layout_nb_channels"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_ch_layout_nb_channels_s = Module["_AVFrame_ch_layout_nb_channels_s"] = function() {
  return (_AVFrame_ch_layout_nb_channels_s = Module["_AVFrame_ch_layout_nb_channels_s"] = Module["asm"]["AVFrame_ch_layout_nb_channels_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_channel_layout = Module["_AVFrame_channel_layout"] = function() {
  return (_AVFrame_channel_layout = Module["_AVFrame_channel_layout"] = Module["asm"]["AVFrame_channel_layout"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_channel_layouthi = Module["_AVFrame_channel_layouthi"] = function() {
  return (_AVFrame_channel_layouthi = Module["_AVFrame_channel_layouthi"] = Module["asm"]["AVFrame_channel_layouthi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_channel_layout_s = Module["_AVFrame_channel_layout_s"] = function() {
  return (_AVFrame_channel_layout_s = Module["_AVFrame_channel_layout_s"] = Module["asm"]["AVFrame_channel_layout_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFrame_channel_layouthi_s = Module["_AVFrame_channel_layouthi_s"] = function() {
  return (_AVFrame_channel_layouthi_s = Module["_AVFrame_channel_layouthi_s"] = Module["asm"]["AVFrame_channel_layouthi_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _ff_frame_rescale_ts_js = Module["_ff_frame_rescale_ts_js"] = function() {
  return (_ff_frame_rescale_ts_js = Module["_ff_frame_rescale_ts_js"] = Module["asm"]["ff_frame_rescale_ts_js"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPixFmtDescriptor_flags = Module["_AVPixFmtDescriptor_flags"] = function() {
  return (_AVPixFmtDescriptor_flags = Module["_AVPixFmtDescriptor_flags"] = Module["asm"]["AVPixFmtDescriptor_flags"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPixFmtDescriptor_flags_s = Module["_AVPixFmtDescriptor_flags_s"] = function() {
  return (_AVPixFmtDescriptor_flags_s = Module["_AVPixFmtDescriptor_flags_s"] = Module["asm"]["AVPixFmtDescriptor_flags_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPixFmtDescriptor_nb_components = Module["_AVPixFmtDescriptor_nb_components"] = function() {
  return (_AVPixFmtDescriptor_nb_components = Module["_AVPixFmtDescriptor_nb_components"] = Module["asm"]["AVPixFmtDescriptor_nb_components"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPixFmtDescriptor_nb_components_s = Module["_AVPixFmtDescriptor_nb_components_s"] = function() {
  return (_AVPixFmtDescriptor_nb_components_s = Module["_AVPixFmtDescriptor_nb_components_s"] = Module["asm"]["AVPixFmtDescriptor_nb_components_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPixFmtDescriptor_log2_chroma_h = Module["_AVPixFmtDescriptor_log2_chroma_h"] = function() {
  return (_AVPixFmtDescriptor_log2_chroma_h = Module["_AVPixFmtDescriptor_log2_chroma_h"] = Module["asm"]["AVPixFmtDescriptor_log2_chroma_h"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPixFmtDescriptor_log2_chroma_h_s = Module["_AVPixFmtDescriptor_log2_chroma_h_s"] = function() {
  return (_AVPixFmtDescriptor_log2_chroma_h_s = Module["_AVPixFmtDescriptor_log2_chroma_h_s"] = Module["asm"]["AVPixFmtDescriptor_log2_chroma_h_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPixFmtDescriptor_log2_chroma_w = Module["_AVPixFmtDescriptor_log2_chroma_w"] = function() {
  return (_AVPixFmtDescriptor_log2_chroma_w = Module["_AVPixFmtDescriptor_log2_chroma_w"] = Module["asm"]["AVPixFmtDescriptor_log2_chroma_w"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPixFmtDescriptor_log2_chroma_w_s = Module["_AVPixFmtDescriptor_log2_chroma_w_s"] = function() {
  return (_AVPixFmtDescriptor_log2_chroma_w_s = Module["_AVPixFmtDescriptor_log2_chroma_w_s"] = Module["asm"]["AVPixFmtDescriptor_log2_chroma_w_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPixFmtDescriptor_comp_depth = Module["_AVPixFmtDescriptor_comp_depth"] = function() {
  return (_AVPixFmtDescriptor_comp_depth = Module["_AVPixFmtDescriptor_comp_depth"] = Module["asm"]["AVPixFmtDescriptor_comp_depth"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_opt_set_int_list_js = Module["_av_opt_set_int_list_js"] = function() {
  return (_av_opt_set_int_list_js = Module["_av_opt_set_int_list_js"] = Module["asm"]["av_opt_set_int_list_js"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodec_name = Module["_AVCodec_name"] = function() {
  return (_AVCodec_name = Module["_AVCodec_name"] = Module["asm"]["AVCodec_name"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodec_sample_fmts = Module["_AVCodec_sample_fmts"] = function() {
  return (_AVCodec_sample_fmts = Module["_AVCodec_sample_fmts"] = Module["asm"]["AVCodec_sample_fmts"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodec_sample_fmts_s = Module["_AVCodec_sample_fmts_s"] = function() {
  return (_AVCodec_sample_fmts_s = Module["_AVCodec_sample_fmts_s"] = Module["asm"]["AVCodec_sample_fmts_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodec_sample_fmts_a = Module["_AVCodec_sample_fmts_a"] = function() {
  return (_AVCodec_sample_fmts_a = Module["_AVCodec_sample_fmts_a"] = Module["asm"]["AVCodec_sample_fmts_a"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodec_sample_fmts_a_s = Module["_AVCodec_sample_fmts_a_s"] = function() {
  return (_AVCodec_sample_fmts_a_s = Module["_AVCodec_sample_fmts_a_s"] = Module["asm"]["AVCodec_sample_fmts_a_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodec_supported_samplerates = Module["_AVCodec_supported_samplerates"] = function() {
  return (_AVCodec_supported_samplerates = Module["_AVCodec_supported_samplerates"] = Module["asm"]["AVCodec_supported_samplerates"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodec_supported_samplerates_s = Module["_AVCodec_supported_samplerates_s"] = function() {
  return (_AVCodec_supported_samplerates_s = Module["_AVCodec_supported_samplerates_s"] = Module["asm"]["AVCodec_supported_samplerates_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodec_supported_samplerates_a = Module["_AVCodec_supported_samplerates_a"] = function() {
  return (_AVCodec_supported_samplerates_a = Module["_AVCodec_supported_samplerates_a"] = Module["asm"]["AVCodec_supported_samplerates_a"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodec_supported_samplerates_a_s = Module["_AVCodec_supported_samplerates_a_s"] = function() {
  return (_AVCodec_supported_samplerates_a_s = Module["_AVCodec_supported_samplerates_a_s"] = Module["asm"]["AVCodec_supported_samplerates_a_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodec_type = Module["_AVCodec_type"] = function() {
  return (_AVCodec_type = Module["_AVCodec_type"] = Module["asm"]["AVCodec_type"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodec_type_s = Module["_AVCodec_type_s"] = function() {
  return (_AVCodec_type_s = Module["_AVCodec_type_s"] = Module["asm"]["AVCodec_type_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_codec_id = Module["_AVCodecContext_codec_id"] = function() {
  return (_AVCodecContext_codec_id = Module["_AVCodecContext_codec_id"] = Module["asm"]["AVCodecContext_codec_id"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_codec_id_s = Module["_AVCodecContext_codec_id_s"] = function() {
  return (_AVCodecContext_codec_id_s = Module["_AVCodecContext_codec_id_s"] = Module["asm"]["AVCodecContext_codec_id_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_codec_type = Module["_AVCodecContext_codec_type"] = function() {
  return (_AVCodecContext_codec_type = Module["_AVCodecContext_codec_type"] = Module["asm"]["AVCodecContext_codec_type"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_codec_type_s = Module["_AVCodecContext_codec_type_s"] = function() {
  return (_AVCodecContext_codec_type_s = Module["_AVCodecContext_codec_type_s"] = Module["asm"]["AVCodecContext_codec_type_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_bit_rate = Module["_AVCodecContext_bit_rate"] = function() {
  return (_AVCodecContext_bit_rate = Module["_AVCodecContext_bit_rate"] = Module["asm"]["AVCodecContext_bit_rate"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_bit_ratehi = Module["_AVCodecContext_bit_ratehi"] = function() {
  return (_AVCodecContext_bit_ratehi = Module["_AVCodecContext_bit_ratehi"] = Module["asm"]["AVCodecContext_bit_ratehi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_bit_rate_s = Module["_AVCodecContext_bit_rate_s"] = function() {
  return (_AVCodecContext_bit_rate_s = Module["_AVCodecContext_bit_rate_s"] = Module["asm"]["AVCodecContext_bit_rate_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_bit_ratehi_s = Module["_AVCodecContext_bit_ratehi_s"] = function() {
  return (_AVCodecContext_bit_ratehi_s = Module["_AVCodecContext_bit_ratehi_s"] = Module["asm"]["AVCodecContext_bit_ratehi_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_extradata = Module["_AVCodecContext_extradata"] = function() {
  return (_AVCodecContext_extradata = Module["_AVCodecContext_extradata"] = Module["asm"]["AVCodecContext_extradata"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_extradata_s = Module["_AVCodecContext_extradata_s"] = function() {
  return (_AVCodecContext_extradata_s = Module["_AVCodecContext_extradata_s"] = Module["asm"]["AVCodecContext_extradata_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_extradata_size = Module["_AVCodecContext_extradata_size"] = function() {
  return (_AVCodecContext_extradata_size = Module["_AVCodecContext_extradata_size"] = Module["asm"]["AVCodecContext_extradata_size"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_extradata_size_s = Module["_AVCodecContext_extradata_size_s"] = function() {
  return (_AVCodecContext_extradata_size_s = Module["_AVCodecContext_extradata_size_s"] = Module["asm"]["AVCodecContext_extradata_size_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_frame_size = Module["_AVCodecContext_frame_size"] = function() {
  return (_AVCodecContext_frame_size = Module["_AVCodecContext_frame_size"] = Module["asm"]["AVCodecContext_frame_size"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_frame_size_s = Module["_AVCodecContext_frame_size_s"] = function() {
  return (_AVCodecContext_frame_size_s = Module["_AVCodecContext_frame_size_s"] = Module["asm"]["AVCodecContext_frame_size_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_gop_size = Module["_AVCodecContext_gop_size"] = function() {
  return (_AVCodecContext_gop_size = Module["_AVCodecContext_gop_size"] = Module["asm"]["AVCodecContext_gop_size"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_gop_size_s = Module["_AVCodecContext_gop_size_s"] = function() {
  return (_AVCodecContext_gop_size_s = Module["_AVCodecContext_gop_size_s"] = Module["asm"]["AVCodecContext_gop_size_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_height = Module["_AVCodecContext_height"] = function() {
  return (_AVCodecContext_height = Module["_AVCodecContext_height"] = Module["asm"]["AVCodecContext_height"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_height_s = Module["_AVCodecContext_height_s"] = function() {
  return (_AVCodecContext_height_s = Module["_AVCodecContext_height_s"] = Module["asm"]["AVCodecContext_height_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_keyint_min = Module["_AVCodecContext_keyint_min"] = function() {
  return (_AVCodecContext_keyint_min = Module["_AVCodecContext_keyint_min"] = Module["asm"]["AVCodecContext_keyint_min"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_keyint_min_s = Module["_AVCodecContext_keyint_min_s"] = function() {
  return (_AVCodecContext_keyint_min_s = Module["_AVCodecContext_keyint_min_s"] = Module["asm"]["AVCodecContext_keyint_min_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_level = Module["_AVCodecContext_level"] = function() {
  return (_AVCodecContext_level = Module["_AVCodecContext_level"] = Module["asm"]["AVCodecContext_level"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_level_s = Module["_AVCodecContext_level_s"] = function() {
  return (_AVCodecContext_level_s = Module["_AVCodecContext_level_s"] = Module["asm"]["AVCodecContext_level_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_max_b_frames = Module["_AVCodecContext_max_b_frames"] = function() {
  return (_AVCodecContext_max_b_frames = Module["_AVCodecContext_max_b_frames"] = Module["asm"]["AVCodecContext_max_b_frames"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_max_b_frames_s = Module["_AVCodecContext_max_b_frames_s"] = function() {
  return (_AVCodecContext_max_b_frames_s = Module["_AVCodecContext_max_b_frames_s"] = Module["asm"]["AVCodecContext_max_b_frames_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_pix_fmt = Module["_AVCodecContext_pix_fmt"] = function() {
  return (_AVCodecContext_pix_fmt = Module["_AVCodecContext_pix_fmt"] = Module["asm"]["AVCodecContext_pix_fmt"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_pix_fmt_s = Module["_AVCodecContext_pix_fmt_s"] = function() {
  return (_AVCodecContext_pix_fmt_s = Module["_AVCodecContext_pix_fmt_s"] = Module["asm"]["AVCodecContext_pix_fmt_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_profile = Module["_AVCodecContext_profile"] = function() {
  return (_AVCodecContext_profile = Module["_AVCodecContext_profile"] = Module["asm"]["AVCodecContext_profile"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_profile_s = Module["_AVCodecContext_profile_s"] = function() {
  return (_AVCodecContext_profile_s = Module["_AVCodecContext_profile_s"] = Module["asm"]["AVCodecContext_profile_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_rc_max_rate = Module["_AVCodecContext_rc_max_rate"] = function() {
  return (_AVCodecContext_rc_max_rate = Module["_AVCodecContext_rc_max_rate"] = Module["asm"]["AVCodecContext_rc_max_rate"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_rc_max_ratehi = Module["_AVCodecContext_rc_max_ratehi"] = function() {
  return (_AVCodecContext_rc_max_ratehi = Module["_AVCodecContext_rc_max_ratehi"] = Module["asm"]["AVCodecContext_rc_max_ratehi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_rc_max_rate_s = Module["_AVCodecContext_rc_max_rate_s"] = function() {
  return (_AVCodecContext_rc_max_rate_s = Module["_AVCodecContext_rc_max_rate_s"] = Module["asm"]["AVCodecContext_rc_max_rate_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_rc_max_ratehi_s = Module["_AVCodecContext_rc_max_ratehi_s"] = function() {
  return (_AVCodecContext_rc_max_ratehi_s = Module["_AVCodecContext_rc_max_ratehi_s"] = Module["asm"]["AVCodecContext_rc_max_ratehi_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_rc_min_rate = Module["_AVCodecContext_rc_min_rate"] = function() {
  return (_AVCodecContext_rc_min_rate = Module["_AVCodecContext_rc_min_rate"] = Module["asm"]["AVCodecContext_rc_min_rate"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_rc_min_ratehi = Module["_AVCodecContext_rc_min_ratehi"] = function() {
  return (_AVCodecContext_rc_min_ratehi = Module["_AVCodecContext_rc_min_ratehi"] = Module["asm"]["AVCodecContext_rc_min_ratehi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_rc_min_rate_s = Module["_AVCodecContext_rc_min_rate_s"] = function() {
  return (_AVCodecContext_rc_min_rate_s = Module["_AVCodecContext_rc_min_rate_s"] = Module["asm"]["AVCodecContext_rc_min_rate_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_rc_min_ratehi_s = Module["_AVCodecContext_rc_min_ratehi_s"] = function() {
  return (_AVCodecContext_rc_min_ratehi_s = Module["_AVCodecContext_rc_min_ratehi_s"] = Module["asm"]["AVCodecContext_rc_min_ratehi_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_sample_fmt = Module["_AVCodecContext_sample_fmt"] = function() {
  return (_AVCodecContext_sample_fmt = Module["_AVCodecContext_sample_fmt"] = Module["asm"]["AVCodecContext_sample_fmt"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_sample_fmt_s = Module["_AVCodecContext_sample_fmt_s"] = function() {
  return (_AVCodecContext_sample_fmt_s = Module["_AVCodecContext_sample_fmt_s"] = Module["asm"]["AVCodecContext_sample_fmt_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_sample_rate = Module["_AVCodecContext_sample_rate"] = function() {
  return (_AVCodecContext_sample_rate = Module["_AVCodecContext_sample_rate"] = Module["asm"]["AVCodecContext_sample_rate"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_sample_rate_s = Module["_AVCodecContext_sample_rate_s"] = function() {
  return (_AVCodecContext_sample_rate_s = Module["_AVCodecContext_sample_rate_s"] = Module["asm"]["AVCodecContext_sample_rate_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_qmax = Module["_AVCodecContext_qmax"] = function() {
  return (_AVCodecContext_qmax = Module["_AVCodecContext_qmax"] = Module["asm"]["AVCodecContext_qmax"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_qmax_s = Module["_AVCodecContext_qmax_s"] = function() {
  return (_AVCodecContext_qmax_s = Module["_AVCodecContext_qmax_s"] = Module["asm"]["AVCodecContext_qmax_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_qmin = Module["_AVCodecContext_qmin"] = function() {
  return (_AVCodecContext_qmin = Module["_AVCodecContext_qmin"] = Module["asm"]["AVCodecContext_qmin"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_qmin_s = Module["_AVCodecContext_qmin_s"] = function() {
  return (_AVCodecContext_qmin_s = Module["_AVCodecContext_qmin_s"] = Module["asm"]["AVCodecContext_qmin_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_width = Module["_AVCodecContext_width"] = function() {
  return (_AVCodecContext_width = Module["_AVCodecContext_width"] = Module["asm"]["AVCodecContext_width"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_width_s = Module["_AVCodecContext_width_s"] = function() {
  return (_AVCodecContext_width_s = Module["_AVCodecContext_width_s"] = Module["asm"]["AVCodecContext_width_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_framerate_num = Module["_AVCodecContext_framerate_num"] = function() {
  return (_AVCodecContext_framerate_num = Module["_AVCodecContext_framerate_num"] = Module["asm"]["AVCodecContext_framerate_num"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_framerate_den = Module["_AVCodecContext_framerate_den"] = function() {
  return (_AVCodecContext_framerate_den = Module["_AVCodecContext_framerate_den"] = Module["asm"]["AVCodecContext_framerate_den"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_framerate_num_s = Module["_AVCodecContext_framerate_num_s"] = function() {
  return (_AVCodecContext_framerate_num_s = Module["_AVCodecContext_framerate_num_s"] = Module["asm"]["AVCodecContext_framerate_num_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_framerate_den_s = Module["_AVCodecContext_framerate_den_s"] = function() {
  return (_AVCodecContext_framerate_den_s = Module["_AVCodecContext_framerate_den_s"] = Module["asm"]["AVCodecContext_framerate_den_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_framerate_s = Module["_AVCodecContext_framerate_s"] = function() {
  return (_AVCodecContext_framerate_s = Module["_AVCodecContext_framerate_s"] = Module["asm"]["AVCodecContext_framerate_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_sample_aspect_ratio_num = Module["_AVCodecContext_sample_aspect_ratio_num"] = function() {
  return (_AVCodecContext_sample_aspect_ratio_num = Module["_AVCodecContext_sample_aspect_ratio_num"] = Module["asm"]["AVCodecContext_sample_aspect_ratio_num"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_sample_aspect_ratio_den = Module["_AVCodecContext_sample_aspect_ratio_den"] = function() {
  return (_AVCodecContext_sample_aspect_ratio_den = Module["_AVCodecContext_sample_aspect_ratio_den"] = Module["asm"]["AVCodecContext_sample_aspect_ratio_den"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_sample_aspect_ratio_num_s = Module["_AVCodecContext_sample_aspect_ratio_num_s"] = function() {
  return (_AVCodecContext_sample_aspect_ratio_num_s = Module["_AVCodecContext_sample_aspect_ratio_num_s"] = Module["asm"]["AVCodecContext_sample_aspect_ratio_num_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_sample_aspect_ratio_den_s = Module["_AVCodecContext_sample_aspect_ratio_den_s"] = function() {
  return (_AVCodecContext_sample_aspect_ratio_den_s = Module["_AVCodecContext_sample_aspect_ratio_den_s"] = Module["asm"]["AVCodecContext_sample_aspect_ratio_den_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_sample_aspect_ratio_s = Module["_AVCodecContext_sample_aspect_ratio_s"] = function() {
  return (_AVCodecContext_sample_aspect_ratio_s = Module["_AVCodecContext_sample_aspect_ratio_s"] = Module["asm"]["AVCodecContext_sample_aspect_ratio_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_time_base_num = Module["_AVCodecContext_time_base_num"] = function() {
  return (_AVCodecContext_time_base_num = Module["_AVCodecContext_time_base_num"] = Module["asm"]["AVCodecContext_time_base_num"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_time_base_den = Module["_AVCodecContext_time_base_den"] = function() {
  return (_AVCodecContext_time_base_den = Module["_AVCodecContext_time_base_den"] = Module["asm"]["AVCodecContext_time_base_den"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_time_base_num_s = Module["_AVCodecContext_time_base_num_s"] = function() {
  return (_AVCodecContext_time_base_num_s = Module["_AVCodecContext_time_base_num_s"] = Module["asm"]["AVCodecContext_time_base_num_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_time_base_den_s = Module["_AVCodecContext_time_base_den_s"] = function() {
  return (_AVCodecContext_time_base_den_s = Module["_AVCodecContext_time_base_den_s"] = Module["asm"]["AVCodecContext_time_base_den_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_time_base_s = Module["_AVCodecContext_time_base_s"] = function() {
  return (_AVCodecContext_time_base_s = Module["_AVCodecContext_time_base_s"] = Module["asm"]["AVCodecContext_time_base_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_channel_layoutmask_s = Module["_AVCodecContext_channel_layoutmask_s"] = function() {
  return (_AVCodecContext_channel_layoutmask_s = Module["_AVCodecContext_channel_layoutmask_s"] = Module["asm"]["AVCodecContext_channel_layoutmask_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_channel_layoutmask = Module["_AVCodecContext_channel_layoutmask"] = function() {
  return (_AVCodecContext_channel_layoutmask = Module["_AVCodecContext_channel_layoutmask"] = Module["asm"]["AVCodecContext_channel_layoutmask"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_channels = Module["_AVCodecContext_channels"] = function() {
  return (_AVCodecContext_channels = Module["_AVCodecContext_channels"] = Module["asm"]["AVCodecContext_channels"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_channels_s = Module["_AVCodecContext_channels_s"] = function() {
  return (_AVCodecContext_channels_s = Module["_AVCodecContext_channels_s"] = Module["asm"]["AVCodecContext_channels_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_ch_layout_nb_channels = Module["_AVCodecContext_ch_layout_nb_channels"] = function() {
  return (_AVCodecContext_ch_layout_nb_channels = Module["_AVCodecContext_ch_layout_nb_channels"] = Module["asm"]["AVCodecContext_ch_layout_nb_channels"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_ch_layout_nb_channels_s = Module["_AVCodecContext_ch_layout_nb_channels_s"] = function() {
  return (_AVCodecContext_ch_layout_nb_channels_s = Module["_AVCodecContext_ch_layout_nb_channels_s"] = Module["asm"]["AVCodecContext_ch_layout_nb_channels_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_channel_layout = Module["_AVCodecContext_channel_layout"] = function() {
  return (_AVCodecContext_channel_layout = Module["_AVCodecContext_channel_layout"] = Module["asm"]["AVCodecContext_channel_layout"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_channel_layouthi = Module["_AVCodecContext_channel_layouthi"] = function() {
  return (_AVCodecContext_channel_layouthi = Module["_AVCodecContext_channel_layouthi"] = Module["asm"]["AVCodecContext_channel_layouthi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_channel_layout_s = Module["_AVCodecContext_channel_layout_s"] = function() {
  return (_AVCodecContext_channel_layout_s = Module["_AVCodecContext_channel_layout_s"] = Module["asm"]["AVCodecContext_channel_layout_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecContext_channel_layouthi_s = Module["_AVCodecContext_channel_layouthi_s"] = function() {
  return (_AVCodecContext_channel_layouthi_s = Module["_AVCodecContext_channel_layouthi_s"] = Module["asm"]["AVCodecContext_channel_layouthi_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecDescriptor_id = Module["_AVCodecDescriptor_id"] = function() {
  return (_AVCodecDescriptor_id = Module["_AVCodecDescriptor_id"] = Module["asm"]["AVCodecDescriptor_id"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecDescriptor_id_s = Module["_AVCodecDescriptor_id_s"] = function() {
  return (_AVCodecDescriptor_id_s = Module["_AVCodecDescriptor_id_s"] = Module["asm"]["AVCodecDescriptor_id_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecDescriptor_long_name = Module["_AVCodecDescriptor_long_name"] = function() {
  return (_AVCodecDescriptor_long_name = Module["_AVCodecDescriptor_long_name"] = Module["asm"]["AVCodecDescriptor_long_name"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecDescriptor_long_name_s = Module["_AVCodecDescriptor_long_name_s"] = function() {
  return (_AVCodecDescriptor_long_name_s = Module["_AVCodecDescriptor_long_name_s"] = Module["asm"]["AVCodecDescriptor_long_name_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecDescriptor_mime_types_a = Module["_AVCodecDescriptor_mime_types_a"] = function() {
  return (_AVCodecDescriptor_mime_types_a = Module["_AVCodecDescriptor_mime_types_a"] = Module["asm"]["AVCodecDescriptor_mime_types_a"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecDescriptor_mime_types_a_s = Module["_AVCodecDescriptor_mime_types_a_s"] = function() {
  return (_AVCodecDescriptor_mime_types_a_s = Module["_AVCodecDescriptor_mime_types_a_s"] = Module["asm"]["AVCodecDescriptor_mime_types_a_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecDescriptor_name = Module["_AVCodecDescriptor_name"] = function() {
  return (_AVCodecDescriptor_name = Module["_AVCodecDescriptor_name"] = Module["asm"]["AVCodecDescriptor_name"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecDescriptor_name_s = Module["_AVCodecDescriptor_name_s"] = function() {
  return (_AVCodecDescriptor_name_s = Module["_AVCodecDescriptor_name_s"] = Module["asm"]["AVCodecDescriptor_name_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecDescriptor_props = Module["_AVCodecDescriptor_props"] = function() {
  return (_AVCodecDescriptor_props = Module["_AVCodecDescriptor_props"] = Module["asm"]["AVCodecDescriptor_props"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecDescriptor_props_s = Module["_AVCodecDescriptor_props_s"] = function() {
  return (_AVCodecDescriptor_props_s = Module["_AVCodecDescriptor_props_s"] = Module["asm"]["AVCodecDescriptor_props_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecDescriptor_type = Module["_AVCodecDescriptor_type"] = function() {
  return (_AVCodecDescriptor_type = Module["_AVCodecDescriptor_type"] = Module["asm"]["AVCodecDescriptor_type"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecDescriptor_type_s = Module["_AVCodecDescriptor_type_s"] = function() {
  return (_AVCodecDescriptor_type_s = Module["_AVCodecDescriptor_type_s"] = Module["asm"]["AVCodecDescriptor_type_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_codec_id = Module["_AVCodecParameters_codec_id"] = function() {
  return (_AVCodecParameters_codec_id = Module["_AVCodecParameters_codec_id"] = Module["asm"]["AVCodecParameters_codec_id"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_codec_id_s = Module["_AVCodecParameters_codec_id_s"] = function() {
  return (_AVCodecParameters_codec_id_s = Module["_AVCodecParameters_codec_id_s"] = Module["asm"]["AVCodecParameters_codec_id_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_codec_tag = Module["_AVCodecParameters_codec_tag"] = function() {
  return (_AVCodecParameters_codec_tag = Module["_AVCodecParameters_codec_tag"] = Module["asm"]["AVCodecParameters_codec_tag"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_codec_tag_s = Module["_AVCodecParameters_codec_tag_s"] = function() {
  return (_AVCodecParameters_codec_tag_s = Module["_AVCodecParameters_codec_tag_s"] = Module["asm"]["AVCodecParameters_codec_tag_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_codec_type = Module["_AVCodecParameters_codec_type"] = function() {
  return (_AVCodecParameters_codec_type = Module["_AVCodecParameters_codec_type"] = Module["asm"]["AVCodecParameters_codec_type"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_codec_type_s = Module["_AVCodecParameters_codec_type_s"] = function() {
  return (_AVCodecParameters_codec_type_s = Module["_AVCodecParameters_codec_type_s"] = Module["asm"]["AVCodecParameters_codec_type_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_extradata = Module["_AVCodecParameters_extradata"] = function() {
  return (_AVCodecParameters_extradata = Module["_AVCodecParameters_extradata"] = Module["asm"]["AVCodecParameters_extradata"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_extradata_s = Module["_AVCodecParameters_extradata_s"] = function() {
  return (_AVCodecParameters_extradata_s = Module["_AVCodecParameters_extradata_s"] = Module["asm"]["AVCodecParameters_extradata_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_extradata_size = Module["_AVCodecParameters_extradata_size"] = function() {
  return (_AVCodecParameters_extradata_size = Module["_AVCodecParameters_extradata_size"] = Module["asm"]["AVCodecParameters_extradata_size"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_extradata_size_s = Module["_AVCodecParameters_extradata_size_s"] = function() {
  return (_AVCodecParameters_extradata_size_s = Module["_AVCodecParameters_extradata_size_s"] = Module["asm"]["AVCodecParameters_extradata_size_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_format = Module["_AVCodecParameters_format"] = function() {
  return (_AVCodecParameters_format = Module["_AVCodecParameters_format"] = Module["asm"]["AVCodecParameters_format"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_format_s = Module["_AVCodecParameters_format_s"] = function() {
  return (_AVCodecParameters_format_s = Module["_AVCodecParameters_format_s"] = Module["asm"]["AVCodecParameters_format_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_bit_rate = Module["_AVCodecParameters_bit_rate"] = function() {
  return (_AVCodecParameters_bit_rate = Module["_AVCodecParameters_bit_rate"] = Module["asm"]["AVCodecParameters_bit_rate"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_bit_rate_s = Module["_AVCodecParameters_bit_rate_s"] = function() {
  return (_AVCodecParameters_bit_rate_s = Module["_AVCodecParameters_bit_rate_s"] = Module["asm"]["AVCodecParameters_bit_rate_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_profile = Module["_AVCodecParameters_profile"] = function() {
  return (_AVCodecParameters_profile = Module["_AVCodecParameters_profile"] = Module["asm"]["AVCodecParameters_profile"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_profile_s = Module["_AVCodecParameters_profile_s"] = function() {
  return (_AVCodecParameters_profile_s = Module["_AVCodecParameters_profile_s"] = Module["asm"]["AVCodecParameters_profile_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_level = Module["_AVCodecParameters_level"] = function() {
  return (_AVCodecParameters_level = Module["_AVCodecParameters_level"] = Module["asm"]["AVCodecParameters_level"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_level_s = Module["_AVCodecParameters_level_s"] = function() {
  return (_AVCodecParameters_level_s = Module["_AVCodecParameters_level_s"] = Module["asm"]["AVCodecParameters_level_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_width = Module["_AVCodecParameters_width"] = function() {
  return (_AVCodecParameters_width = Module["_AVCodecParameters_width"] = Module["asm"]["AVCodecParameters_width"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_width_s = Module["_AVCodecParameters_width_s"] = function() {
  return (_AVCodecParameters_width_s = Module["_AVCodecParameters_width_s"] = Module["asm"]["AVCodecParameters_width_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_height = Module["_AVCodecParameters_height"] = function() {
  return (_AVCodecParameters_height = Module["_AVCodecParameters_height"] = Module["asm"]["AVCodecParameters_height"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_height_s = Module["_AVCodecParameters_height_s"] = function() {
  return (_AVCodecParameters_height_s = Module["_AVCodecParameters_height_s"] = Module["asm"]["AVCodecParameters_height_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_color_range = Module["_AVCodecParameters_color_range"] = function() {
  return (_AVCodecParameters_color_range = Module["_AVCodecParameters_color_range"] = Module["asm"]["AVCodecParameters_color_range"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_color_range_s = Module["_AVCodecParameters_color_range_s"] = function() {
  return (_AVCodecParameters_color_range_s = Module["_AVCodecParameters_color_range_s"] = Module["asm"]["AVCodecParameters_color_range_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_color_primaries = Module["_AVCodecParameters_color_primaries"] = function() {
  return (_AVCodecParameters_color_primaries = Module["_AVCodecParameters_color_primaries"] = Module["asm"]["AVCodecParameters_color_primaries"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_color_primaries_s = Module["_AVCodecParameters_color_primaries_s"] = function() {
  return (_AVCodecParameters_color_primaries_s = Module["_AVCodecParameters_color_primaries_s"] = Module["asm"]["AVCodecParameters_color_primaries_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_color_trc = Module["_AVCodecParameters_color_trc"] = function() {
  return (_AVCodecParameters_color_trc = Module["_AVCodecParameters_color_trc"] = Module["asm"]["AVCodecParameters_color_trc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_color_trc_s = Module["_AVCodecParameters_color_trc_s"] = function() {
  return (_AVCodecParameters_color_trc_s = Module["_AVCodecParameters_color_trc_s"] = Module["asm"]["AVCodecParameters_color_trc_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_color_space = Module["_AVCodecParameters_color_space"] = function() {
  return (_AVCodecParameters_color_space = Module["_AVCodecParameters_color_space"] = Module["asm"]["AVCodecParameters_color_space"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_color_space_s = Module["_AVCodecParameters_color_space_s"] = function() {
  return (_AVCodecParameters_color_space_s = Module["_AVCodecParameters_color_space_s"] = Module["asm"]["AVCodecParameters_color_space_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_chroma_location = Module["_AVCodecParameters_chroma_location"] = function() {
  return (_AVCodecParameters_chroma_location = Module["_AVCodecParameters_chroma_location"] = Module["asm"]["AVCodecParameters_chroma_location"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_chroma_location_s = Module["_AVCodecParameters_chroma_location_s"] = function() {
  return (_AVCodecParameters_chroma_location_s = Module["_AVCodecParameters_chroma_location_s"] = Module["asm"]["AVCodecParameters_chroma_location_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_sample_rate = Module["_AVCodecParameters_sample_rate"] = function() {
  return (_AVCodecParameters_sample_rate = Module["_AVCodecParameters_sample_rate"] = Module["asm"]["AVCodecParameters_sample_rate"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_sample_rate_s = Module["_AVCodecParameters_sample_rate_s"] = function() {
  return (_AVCodecParameters_sample_rate_s = Module["_AVCodecParameters_sample_rate_s"] = Module["asm"]["AVCodecParameters_sample_rate_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_framerate_num = Module["_AVCodecParameters_framerate_num"] = function() {
  return (_AVCodecParameters_framerate_num = Module["_AVCodecParameters_framerate_num"] = Module["asm"]["AVCodecParameters_framerate_num"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_framerate_den = Module["_AVCodecParameters_framerate_den"] = function() {
  return (_AVCodecParameters_framerate_den = Module["_AVCodecParameters_framerate_den"] = Module["asm"]["AVCodecParameters_framerate_den"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_framerate_num_s = Module["_AVCodecParameters_framerate_num_s"] = function() {
  return (_AVCodecParameters_framerate_num_s = Module["_AVCodecParameters_framerate_num_s"] = Module["asm"]["AVCodecParameters_framerate_num_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_framerate_den_s = Module["_AVCodecParameters_framerate_den_s"] = function() {
  return (_AVCodecParameters_framerate_den_s = Module["_AVCodecParameters_framerate_den_s"] = Module["asm"]["AVCodecParameters_framerate_den_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_framerate_s = Module["_AVCodecParameters_framerate_s"] = function() {
  return (_AVCodecParameters_framerate_s = Module["_AVCodecParameters_framerate_s"] = Module["asm"]["AVCodecParameters_framerate_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_channel_layoutmask_s = Module["_AVCodecParameters_channel_layoutmask_s"] = function() {
  return (_AVCodecParameters_channel_layoutmask_s = Module["_AVCodecParameters_channel_layoutmask_s"] = Module["asm"]["AVCodecParameters_channel_layoutmask_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_channel_layoutmask = Module["_AVCodecParameters_channel_layoutmask"] = function() {
  return (_AVCodecParameters_channel_layoutmask = Module["_AVCodecParameters_channel_layoutmask"] = Module["asm"]["AVCodecParameters_channel_layoutmask"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_channels = Module["_AVCodecParameters_channels"] = function() {
  return (_AVCodecParameters_channels = Module["_AVCodecParameters_channels"] = Module["asm"]["AVCodecParameters_channels"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_channels_s = Module["_AVCodecParameters_channels_s"] = function() {
  return (_AVCodecParameters_channels_s = Module["_AVCodecParameters_channels_s"] = Module["asm"]["AVCodecParameters_channels_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_ch_layout_nb_channels = Module["_AVCodecParameters_ch_layout_nb_channels"] = function() {
  return (_AVCodecParameters_ch_layout_nb_channels = Module["_AVCodecParameters_ch_layout_nb_channels"] = Module["asm"]["AVCodecParameters_ch_layout_nb_channels"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVCodecParameters_ch_layout_nb_channels_s = Module["_AVCodecParameters_ch_layout_nb_channels_s"] = function() {
  return (_AVCodecParameters_ch_layout_nb_channels_s = Module["_AVCodecParameters_ch_layout_nb_channels_s"] = Module["asm"]["AVCodecParameters_ch_layout_nb_channels_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_data = Module["_AVPacket_data"] = function() {
  return (_AVPacket_data = Module["_AVPacket_data"] = Module["asm"]["AVPacket_data"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_data_s = Module["_AVPacket_data_s"] = function() {
  return (_AVPacket_data_s = Module["_AVPacket_data_s"] = Module["asm"]["AVPacket_data_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_dts = Module["_AVPacket_dts"] = function() {
  return (_AVPacket_dts = Module["_AVPacket_dts"] = Module["asm"]["AVPacket_dts"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_dtshi = Module["_AVPacket_dtshi"] = function() {
  return (_AVPacket_dtshi = Module["_AVPacket_dtshi"] = Module["asm"]["AVPacket_dtshi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_dts_s = Module["_AVPacket_dts_s"] = function() {
  return (_AVPacket_dts_s = Module["_AVPacket_dts_s"] = Module["asm"]["AVPacket_dts_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_dtshi_s = Module["_AVPacket_dtshi_s"] = function() {
  return (_AVPacket_dtshi_s = Module["_AVPacket_dtshi_s"] = Module["asm"]["AVPacket_dtshi_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_duration = Module["_AVPacket_duration"] = function() {
  return (_AVPacket_duration = Module["_AVPacket_duration"] = Module["asm"]["AVPacket_duration"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_durationhi = Module["_AVPacket_durationhi"] = function() {
  return (_AVPacket_durationhi = Module["_AVPacket_durationhi"] = Module["asm"]["AVPacket_durationhi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_duration_s = Module["_AVPacket_duration_s"] = function() {
  return (_AVPacket_duration_s = Module["_AVPacket_duration_s"] = Module["asm"]["AVPacket_duration_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_durationhi_s = Module["_AVPacket_durationhi_s"] = function() {
  return (_AVPacket_durationhi_s = Module["_AVPacket_durationhi_s"] = Module["asm"]["AVPacket_durationhi_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_flags = Module["_AVPacket_flags"] = function() {
  return (_AVPacket_flags = Module["_AVPacket_flags"] = Module["asm"]["AVPacket_flags"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_flags_s = Module["_AVPacket_flags_s"] = function() {
  return (_AVPacket_flags_s = Module["_AVPacket_flags_s"] = Module["asm"]["AVPacket_flags_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_pos = Module["_AVPacket_pos"] = function() {
  return (_AVPacket_pos = Module["_AVPacket_pos"] = Module["asm"]["AVPacket_pos"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_poshi = Module["_AVPacket_poshi"] = function() {
  return (_AVPacket_poshi = Module["_AVPacket_poshi"] = Module["asm"]["AVPacket_poshi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_pos_s = Module["_AVPacket_pos_s"] = function() {
  return (_AVPacket_pos_s = Module["_AVPacket_pos_s"] = Module["asm"]["AVPacket_pos_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_poshi_s = Module["_AVPacket_poshi_s"] = function() {
  return (_AVPacket_poshi_s = Module["_AVPacket_poshi_s"] = Module["asm"]["AVPacket_poshi_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_pts = Module["_AVPacket_pts"] = function() {
  return (_AVPacket_pts = Module["_AVPacket_pts"] = Module["asm"]["AVPacket_pts"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_ptshi = Module["_AVPacket_ptshi"] = function() {
  return (_AVPacket_ptshi = Module["_AVPacket_ptshi"] = Module["asm"]["AVPacket_ptshi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_pts_s = Module["_AVPacket_pts_s"] = function() {
  return (_AVPacket_pts_s = Module["_AVPacket_pts_s"] = Module["asm"]["AVPacket_pts_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_ptshi_s = Module["_AVPacket_ptshi_s"] = function() {
  return (_AVPacket_ptshi_s = Module["_AVPacket_ptshi_s"] = Module["asm"]["AVPacket_ptshi_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_side_data = Module["_AVPacket_side_data"] = function() {
  return (_AVPacket_side_data = Module["_AVPacket_side_data"] = Module["asm"]["AVPacket_side_data"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_side_data_s = Module["_AVPacket_side_data_s"] = function() {
  return (_AVPacket_side_data_s = Module["_AVPacket_side_data_s"] = Module["asm"]["AVPacket_side_data_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_side_data_elems = Module["_AVPacket_side_data_elems"] = function() {
  return (_AVPacket_side_data_elems = Module["_AVPacket_side_data_elems"] = Module["asm"]["AVPacket_side_data_elems"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_side_data_elems_s = Module["_AVPacket_side_data_elems_s"] = function() {
  return (_AVPacket_side_data_elems_s = Module["_AVPacket_side_data_elems_s"] = Module["asm"]["AVPacket_side_data_elems_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_size = Module["_AVPacket_size"] = function() {
  return (_AVPacket_size = Module["_AVPacket_size"] = Module["asm"]["AVPacket_size"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_size_s = Module["_AVPacket_size_s"] = function() {
  return (_AVPacket_size_s = Module["_AVPacket_size_s"] = Module["asm"]["AVPacket_size_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_stream_index = Module["_AVPacket_stream_index"] = function() {
  return (_AVPacket_stream_index = Module["_AVPacket_stream_index"] = Module["asm"]["AVPacket_stream_index"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_stream_index_s = Module["_AVPacket_stream_index_s"] = function() {
  return (_AVPacket_stream_index_s = Module["_AVPacket_stream_index_s"] = Module["asm"]["AVPacket_stream_index_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_time_base_num = Module["_AVPacket_time_base_num"] = function() {
  return (_AVPacket_time_base_num = Module["_AVPacket_time_base_num"] = Module["asm"]["AVPacket_time_base_num"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_time_base_den = Module["_AVPacket_time_base_den"] = function() {
  return (_AVPacket_time_base_den = Module["_AVPacket_time_base_den"] = Module["asm"]["AVPacket_time_base_den"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_time_base_num_s = Module["_AVPacket_time_base_num_s"] = function() {
  return (_AVPacket_time_base_num_s = Module["_AVPacket_time_base_num_s"] = Module["asm"]["AVPacket_time_base_num_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_time_base_den_s = Module["_AVPacket_time_base_den_s"] = function() {
  return (_AVPacket_time_base_den_s = Module["_AVPacket_time_base_den_s"] = Module["asm"]["AVPacket_time_base_den_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacket_time_base_s = Module["_AVPacket_time_base_s"] = function() {
  return (_AVPacket_time_base_s = Module["_AVPacket_time_base_s"] = Module["asm"]["AVPacket_time_base_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacketSideData_data = Module["_AVPacketSideData_data"] = function() {
  return (_AVPacketSideData_data = Module["_AVPacketSideData_data"] = Module["asm"]["AVPacketSideData_data"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacketSideData_size = Module["_AVPacketSideData_size"] = function() {
  return (_AVPacketSideData_size = Module["_AVPacketSideData_size"] = Module["asm"]["AVPacketSideData_size"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVPacketSideData_type = Module["_AVPacketSideData_type"] = function() {
  return (_AVPacketSideData_type = Module["_AVPacketSideData_type"] = Module["asm"]["AVPacketSideData_type"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_open2_js = Module["_avcodec_open2_js"] = function() {
  return (_avcodec_open2_js = Module["_avcodec_open2_js"] = Module["asm"]["avcodec_open2_js"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_open2 = Module["_avcodec_open2"] = function() {
  return (_avcodec_open2 = Module["_avcodec_open2"] = Module["asm"]["avcodec_open2"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_packet_rescale_ts_js = Module["_av_packet_rescale_ts_js"] = function() {
  return (_av_packet_rescale_ts_js = Module["_av_packet_rescale_ts_js"] = Module["asm"]["av_packet_rescale_ts_js"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_duration = Module["_AVFormatContext_duration"] = function() {
  return (_AVFormatContext_duration = Module["_AVFormatContext_duration"] = Module["asm"]["AVFormatContext_duration"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_durationhi = Module["_AVFormatContext_durationhi"] = function() {
  return (_AVFormatContext_durationhi = Module["_AVFormatContext_durationhi"] = Module["asm"]["AVFormatContext_durationhi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_duration_s = Module["_AVFormatContext_duration_s"] = function() {
  return (_AVFormatContext_duration_s = Module["_AVFormatContext_duration_s"] = Module["asm"]["AVFormatContext_duration_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_durationhi_s = Module["_AVFormatContext_durationhi_s"] = function() {
  return (_AVFormatContext_durationhi_s = Module["_AVFormatContext_durationhi_s"] = Module["asm"]["AVFormatContext_durationhi_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_flags = Module["_AVFormatContext_flags"] = function() {
  return (_AVFormatContext_flags = Module["_AVFormatContext_flags"] = Module["asm"]["AVFormatContext_flags"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_flags_s = Module["_AVFormatContext_flags_s"] = function() {
  return (_AVFormatContext_flags_s = Module["_AVFormatContext_flags_s"] = Module["asm"]["AVFormatContext_flags_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_nb_streams = Module["_AVFormatContext_nb_streams"] = function() {
  return (_AVFormatContext_nb_streams = Module["_AVFormatContext_nb_streams"] = Module["asm"]["AVFormatContext_nb_streams"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_nb_streams_s = Module["_AVFormatContext_nb_streams_s"] = function() {
  return (_AVFormatContext_nb_streams_s = Module["_AVFormatContext_nb_streams_s"] = Module["asm"]["AVFormatContext_nb_streams_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_oformat = Module["_AVFormatContext_oformat"] = function() {
  return (_AVFormatContext_oformat = Module["_AVFormatContext_oformat"] = Module["asm"]["AVFormatContext_oformat"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_oformat_s = Module["_AVFormatContext_oformat_s"] = function() {
  return (_AVFormatContext_oformat_s = Module["_AVFormatContext_oformat_s"] = Module["asm"]["AVFormatContext_oformat_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_pb = Module["_AVFormatContext_pb"] = function() {
  return (_AVFormatContext_pb = Module["_AVFormatContext_pb"] = Module["asm"]["AVFormatContext_pb"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_pb_s = Module["_AVFormatContext_pb_s"] = function() {
  return (_AVFormatContext_pb_s = Module["_AVFormatContext_pb_s"] = Module["asm"]["AVFormatContext_pb_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_start_time = Module["_AVFormatContext_start_time"] = function() {
  return (_AVFormatContext_start_time = Module["_AVFormatContext_start_time"] = Module["asm"]["AVFormatContext_start_time"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_start_timehi = Module["_AVFormatContext_start_timehi"] = function() {
  return (_AVFormatContext_start_timehi = Module["_AVFormatContext_start_timehi"] = Module["asm"]["AVFormatContext_start_timehi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_start_time_s = Module["_AVFormatContext_start_time_s"] = function() {
  return (_AVFormatContext_start_time_s = Module["_AVFormatContext_start_time_s"] = Module["asm"]["AVFormatContext_start_time_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_start_timehi_s = Module["_AVFormatContext_start_timehi_s"] = function() {
  return (_AVFormatContext_start_timehi_s = Module["_AVFormatContext_start_timehi_s"] = Module["asm"]["AVFormatContext_start_timehi_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_streams_a = Module["_AVFormatContext_streams_a"] = function() {
  return (_AVFormatContext_streams_a = Module["_AVFormatContext_streams_a"] = Module["asm"]["AVFormatContext_streams_a"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFormatContext_streams_a_s = Module["_AVFormatContext_streams_a_s"] = function() {
  return (_AVFormatContext_streams_a_s = Module["_AVFormatContext_streams_a_s"] = Module["asm"]["AVFormatContext_streams_a_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVStream_codecpar = Module["_AVStream_codecpar"] = function() {
  return (_AVStream_codecpar = Module["_AVStream_codecpar"] = Module["asm"]["AVStream_codecpar"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVStream_codecpar_s = Module["_AVStream_codecpar_s"] = function() {
  return (_AVStream_codecpar_s = Module["_AVStream_codecpar_s"] = Module["asm"]["AVStream_codecpar_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVStream_discard = Module["_AVStream_discard"] = function() {
  return (_AVStream_discard = Module["_AVStream_discard"] = Module["asm"]["AVStream_discard"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVStream_discard_s = Module["_AVStream_discard_s"] = function() {
  return (_AVStream_discard_s = Module["_AVStream_discard_s"] = Module["asm"]["AVStream_discard_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVStream_duration = Module["_AVStream_duration"] = function() {
  return (_AVStream_duration = Module["_AVStream_duration"] = Module["asm"]["AVStream_duration"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVStream_durationhi = Module["_AVStream_durationhi"] = function() {
  return (_AVStream_durationhi = Module["_AVStream_durationhi"] = Module["asm"]["AVStream_durationhi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVStream_duration_s = Module["_AVStream_duration_s"] = function() {
  return (_AVStream_duration_s = Module["_AVStream_duration_s"] = Module["asm"]["AVStream_duration_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVStream_durationhi_s = Module["_AVStream_durationhi_s"] = function() {
  return (_AVStream_durationhi_s = Module["_AVStream_durationhi_s"] = Module["asm"]["AVStream_durationhi_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVStream_time_base_num = Module["_AVStream_time_base_num"] = function() {
  return (_AVStream_time_base_num = Module["_AVStream_time_base_num"] = Module["asm"]["AVStream_time_base_num"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVStream_time_base_den = Module["_AVStream_time_base_den"] = function() {
  return (_AVStream_time_base_den = Module["_AVStream_time_base_den"] = Module["asm"]["AVStream_time_base_den"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVStream_time_base_num_s = Module["_AVStream_time_base_num_s"] = function() {
  return (_AVStream_time_base_num_s = Module["_AVStream_time_base_num_s"] = Module["asm"]["AVStream_time_base_num_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVStream_time_base_den_s = Module["_AVStream_time_base_den_s"] = function() {
  return (_AVStream_time_base_den_s = Module["_AVStream_time_base_den_s"] = Module["asm"]["AVStream_time_base_den_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVStream_time_base_s = Module["_AVStream_time_base_s"] = function() {
  return (_AVStream_time_base_s = Module["_AVStream_time_base_s"] = Module["asm"]["AVStream_time_base_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_seek_file_min = Module["_avformat_seek_file_min"] = function() {
  return (_avformat_seek_file_min = Module["_avformat_seek_file_min"] = Module["asm"]["avformat_seek_file_min"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_seek_file = Module["_avformat_seek_file"] = function() {
  return (_avformat_seek_file = Module["_avformat_seek_file"] = Module["asm"]["avformat_seek_file"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_seek_file_max = Module["_avformat_seek_file_max"] = function() {
  return (_avformat_seek_file_max = Module["_avformat_seek_file_max"] = Module["asm"]["avformat_seek_file_max"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_seek_file_approx = Module["_avformat_seek_file_approx"] = function() {
  return (_avformat_seek_file_approx = Module["_avformat_seek_file_approx"] = Module["asm"]["avformat_seek_file_approx"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFilterInOut_filter_ctx = Module["_AVFilterInOut_filter_ctx"] = function() {
  return (_AVFilterInOut_filter_ctx = Module["_AVFilterInOut_filter_ctx"] = Module["asm"]["AVFilterInOut_filter_ctx"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFilterInOut_filter_ctx_s = Module["_AVFilterInOut_filter_ctx_s"] = function() {
  return (_AVFilterInOut_filter_ctx_s = Module["_AVFilterInOut_filter_ctx_s"] = Module["asm"]["AVFilterInOut_filter_ctx_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFilterInOut_name = Module["_AVFilterInOut_name"] = function() {
  return (_AVFilterInOut_name = Module["_AVFilterInOut_name"] = Module["asm"]["AVFilterInOut_name"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFilterInOut_name_s = Module["_AVFilterInOut_name_s"] = function() {
  return (_AVFilterInOut_name_s = Module["_AVFilterInOut_name_s"] = Module["asm"]["AVFilterInOut_name_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFilterInOut_next = Module["_AVFilterInOut_next"] = function() {
  return (_AVFilterInOut_next = Module["_AVFilterInOut_next"] = Module["asm"]["AVFilterInOut_next"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFilterInOut_next_s = Module["_AVFilterInOut_next_s"] = function() {
  return (_AVFilterInOut_next_s = Module["_AVFilterInOut_next_s"] = Module["asm"]["AVFilterInOut_next_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFilterInOut_pad_idx = Module["_AVFilterInOut_pad_idx"] = function() {
  return (_AVFilterInOut_pad_idx = Module["_AVFilterInOut_pad_idx"] = Module["asm"]["AVFilterInOut_pad_idx"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _AVFilterInOut_pad_idx_s = Module["_AVFilterInOut_pad_idx_s"] = function() {
  return (_AVFilterInOut_pad_idx_s = Module["_AVFilterInOut_pad_idx_s"] = Module["asm"]["AVFilterInOut_pad_idx_s"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_buffersink_get_time_base_num = Module["_av_buffersink_get_time_base_num"] = function() {
  return (_av_buffersink_get_time_base_num = Module["_av_buffersink_get_time_base_num"] = Module["asm"]["av_buffersink_get_time_base_num"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_buffersink_get_time_base_den = Module["_av_buffersink_get_time_base_den"] = function() {
  return (_av_buffersink_get_time_base_den = Module["_av_buffersink_get_time_base_den"] = Module["asm"]["av_buffersink_get_time_base_den"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _ff_buffersink_set_ch_layout = Module["_ff_buffersink_set_ch_layout"] = function() {
  return (_ff_buffersink_set_ch_layout = Module["_ff_buffersink_set_ch_layout"] = Module["asm"]["ff_buffersink_set_ch_layout"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_opt_set = Module["_av_opt_set"] = function() {
  return (_av_opt_set = Module["_av_opt_set"] = Module["asm"]["av_opt_set"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _libavjs_with_swscale = Module["_libavjs_with_swscale"] = function() {
  return (_libavjs_with_swscale = Module["_libavjs_with_swscale"] = Module["asm"]["libavjs_with_swscale"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _ffmpeg_main = Module["_ffmpeg_main"] = function() {
  return (_ffmpeg_main = Module["_ffmpeg_main"] = Module["asm"]["ffmpeg_main"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _ffprobe_main = Module["_ffprobe_main"] = function() {
  return (_ffprobe_main = Module["_ffprobe_main"] = Module["asm"]["ffprobe_main"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _libavjs_create_main_thread = Module["_libavjs_create_main_thread"] = function() {
  return (_libavjs_create_main_thread = Module["_libavjs_create_main_thread"] = Module["asm"]["libavjs_create_main_thread"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_alloc_output_context2_js = Module["_avformat_alloc_output_context2_js"] = function() {
  return (_avformat_alloc_output_context2_js = Module["_avformat_alloc_output_context2_js"] = Module["asm"]["avformat_alloc_output_context2_js"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_open_input_js = Module["_avformat_open_input_js"] = function() {
  return (_avformat_open_input_js = Module["_avformat_open_input_js"] = Module["asm"]["avformat_open_input_js"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_open_input = Module["_avformat_open_input"] = function() {
  return (_avformat_open_input = Module["_avformat_open_input"] = Module["asm"]["avformat_open_input"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avio_open2_js = Module["_avio_open2_js"] = function() {
  return (_avio_open2_js = Module["_avio_open2_js"] = Module["asm"]["avio_open2_js"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avfilter_graph_create_filter_js = Module["_avfilter_graph_create_filter_js"] = function() {
  return (_avfilter_graph_create_filter_js = Module["_avfilter_graph_create_filter_js"] = Module["asm"]["avfilter_graph_create_filter_js"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_dict_copy_js = Module["_av_dict_copy_js"] = function() {
  return (_av_dict_copy_js = Module["_av_dict_copy_js"] = Module["asm"]["av_dict_copy_js"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_dict_set_js = Module["_av_dict_set_js"] = function() {
  return (_av_dict_set_js = Module["_av_dict_set_js"] = Module["asm"]["av_dict_set_js"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_compare_ts_js = Module["_av_compare_ts_js"] = function() {
  return (_av_compare_ts_js = Module["_av_compare_ts_js"] = Module["asm"]["av_compare_ts_js"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _ff_error = Module["_ff_error"] = function() {
  return (_ff_error = Module["_ff_error"] = Module["asm"]["ff_error"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _mallinfo_uordblks = Module["_mallinfo_uordblks"] = function() {
  return (_mallinfo_uordblks = Module["_mallinfo_uordblks"] = Module["asm"]["mallinfo_uordblks"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_strdup = Module["_av_strdup"] = function() {
  return (_av_strdup = Module["_av_strdup"] = Module["asm"]["av_strdup"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = function() {
  return (___errno_location = Module["___errno_location"] = Module["asm"]["__errno_location"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_dict_free = Module["_av_dict_free"] = function() {
  return (_av_dict_free = Module["_av_dict_free"] = Module["asm"]["av_dict_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_frame_alloc = Module["_av_frame_alloc"] = function() {
  return (_av_frame_alloc = Module["_av_frame_alloc"] = Module["asm"]["av_frame_alloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_frame_free = Module["_av_frame_free"] = function() {
  return (_av_frame_free = Module["_av_frame_free"] = Module["asm"]["av_frame_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_frame_unref = Module["_av_frame_unref"] = function() {
  return (_av_frame_unref = Module["_av_frame_unref"] = Module["asm"]["av_frame_unref"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_frame_get_buffer = Module["_av_frame_get_buffer"] = function() {
  return (_av_frame_get_buffer = Module["_av_frame_get_buffer"] = Module["asm"]["av_frame_get_buffer"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_frame_ref = Module["_av_frame_ref"] = function() {
  return (_av_frame_ref = Module["_av_frame_ref"] = Module["asm"]["av_frame_ref"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_frame_clone = Module["_av_frame_clone"] = function() {
  return (_av_frame_clone = Module["_av_frame_clone"] = Module["asm"]["av_frame_clone"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_frame_make_writable = Module["_av_frame_make_writable"] = function() {
  return (_av_frame_make_writable = Module["_av_frame_make_writable"] = Module["asm"]["av_frame_make_writable"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_log_get_level = Module["_av_log_get_level"] = function() {
  return (_av_log_get_level = Module["_av_log_get_level"] = Module["asm"]["av_log_get_level"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_log_set_level = Module["_av_log_set_level"] = function() {
  return (_av_log_set_level = Module["_av_log_set_level"] = Module["asm"]["av_log_set_level"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _free = Module["_free"] = function() {
  return (_free = Module["_free"] = Module["asm"]["free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_get_sample_fmt_name = Module["_av_get_sample_fmt_name"] = function() {
  return (_av_get_sample_fmt_name = Module["_av_get_sample_fmt_name"] = Module["asm"]["av_get_sample_fmt_name"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_pix_fmt_desc_get = Module["_av_pix_fmt_desc_get"] = function() {
  return (_av_pix_fmt_desc_get = Module["_av_pix_fmt_desc_get"] = Module["asm"]["av_pix_fmt_desc_get"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _open = Module["_open"] = function() {
  return (_open = Module["_open"] = Module["asm"]["open"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_get_bytes_per_sample = Module["_av_get_bytes_per_sample"] = function() {
  return (_av_get_bytes_per_sample = Module["_av_get_bytes_per_sample"] = Module["asm"]["av_get_bytes_per_sample"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_free_context = Module["_avformat_free_context"] = function() {
  return (_avformat_free_context = Module["_avformat_free_context"] = Module["asm"]["avformat_free_context"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_find_best_stream = Module["_av_find_best_stream"] = function() {
  return (_av_find_best_stream = Module["_av_find_best_stream"] = Module["asm"]["av_find_best_stream"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avio_close = Module["_avio_close"] = function() {
  return (_avio_close = Module["_avio_close"] = Module["asm"]["avio_close"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avio_flush = Module["_avio_flush"] = function() {
  return (_avio_flush = Module["_avio_flush"] = Module["asm"]["avio_flush"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_alloc_context = Module["_avformat_alloc_context"] = function() {
  return (_avformat_alloc_context = Module["_avformat_alloc_context"] = Module["asm"]["avformat_alloc_context"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_packet_unref = Module["_av_packet_unref"] = function() {
  return (_av_packet_unref = Module["_av_packet_unref"] = Module["asm"]["av_packet_unref"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_free_context = Module["_avcodec_free_context"] = function() {
  return (_avcodec_free_context = Module["_avcodec_free_context"] = Module["asm"]["avcodec_free_context"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_parameters_free = Module["_avcodec_parameters_free"] = function() {
  return (_avcodec_parameters_free = Module["_avcodec_parameters_free"] = Module["asm"]["avcodec_parameters_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_packet_free = Module["_av_packet_free"] = function() {
  return (_av_packet_free = Module["_av_packet_free"] = Module["asm"]["av_packet_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_new_stream = Module["_avformat_new_stream"] = function() {
  return (_avformat_new_stream = Module["_avformat_new_stream"] = Module["asm"]["avformat_new_stream"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_parameters_copy = Module["_avcodec_parameters_copy"] = function() {
  return (_avcodec_parameters_copy = Module["_avcodec_parameters_copy"] = Module["asm"]["avcodec_parameters_copy"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_packet_ref = Module["_av_packet_ref"] = function() {
  return (_av_packet_ref = Module["_av_packet_ref"] = Module["asm"]["av_packet_ref"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_find_decoder = Module["_avcodec_find_decoder"] = function() {
  return (_avcodec_find_decoder = Module["_avcodec_find_decoder"] = Module["asm"]["avcodec_find_decoder"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_descriptor_get = Module["_avcodec_descriptor_get"] = function() {
  return (_avcodec_descriptor_get = Module["_avcodec_descriptor_get"] = Module["asm"]["avcodec_descriptor_get"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_parameters_to_context = Module["_avcodec_parameters_to_context"] = function() {
  return (_avcodec_parameters_to_context = Module["_avcodec_parameters_to_context"] = Module["asm"]["avcodec_parameters_to_context"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_close_input = Module["_avformat_close_input"] = function() {
  return (_avformat_close_input = Module["_avformat_close_input"] = Module["asm"]["avformat_close_input"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_read_frame = Module["_av_read_frame"] = function() {
  return (_av_read_frame = Module["_av_read_frame"] = Module["asm"]["av_read_frame"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_get_name = Module["_avcodec_get_name"] = function() {
  return (_avcodec_get_name = Module["_avcodec_get_name"] = Module["asm"]["avcodec_get_name"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_packet_new_side_data = Module["_av_packet_new_side_data"] = function() {
  return (_av_packet_new_side_data = Module["_av_packet_new_side_data"] = Module["asm"]["av_packet_new_side_data"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_find_stream_info = Module["_avformat_find_stream_info"] = function() {
  return (_avformat_find_stream_info = Module["_avformat_find_stream_info"] = Module["asm"]["avformat_find_stream_info"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_parameters_from_context = Module["_avcodec_parameters_from_context"] = function() {
  return (_avcodec_parameters_from_context = Module["_avcodec_parameters_from_context"] = Module["asm"]["avcodec_parameters_from_context"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_send_packet = Module["_avcodec_send_packet"] = function() {
  return (_avcodec_send_packet = Module["_avcodec_send_packet"] = Module["asm"]["avcodec_send_packet"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_receive_frame = Module["_avcodec_receive_frame"] = function() {
  return (_avcodec_receive_frame = Module["_avcodec_receive_frame"] = Module["asm"]["avcodec_receive_frame"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_alloc_context3 = Module["_avcodec_alloc_context3"] = function() {
  return (_avcodec_alloc_context3 = Module["_avcodec_alloc_context3"] = Module["asm"]["avcodec_alloc_context3"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_parameters_alloc = Module["_avcodec_parameters_alloc"] = function() {
  return (_avcodec_parameters_alloc = Module["_avcodec_parameters_alloc"] = Module["asm"]["avcodec_parameters_alloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_find_input_format = Module["_av_find_input_format"] = function() {
  return (_av_find_input_format = Module["_av_find_input_format"] = Module["asm"]["av_find_input_format"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_packet_clone = Module["_av_packet_clone"] = function() {
  return (_av_packet_clone = Module["_av_packet_clone"] = Module["asm"]["av_packet_clone"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_packet_alloc = Module["_av_packet_alloc"] = function() {
  return (_av_packet_alloc = Module["_av_packet_alloc"] = Module["asm"]["av_packet_alloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_grow_packet = Module["_av_grow_packet"] = function() {
  return (_av_grow_packet = Module["_av_grow_packet"] = Module["asm"]["av_grow_packet"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_packet_make_writable = Module["_av_packet_make_writable"] = function() {
  return (_av_packet_make_writable = Module["_av_packet_make_writable"] = Module["asm"]["av_packet_make_writable"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_write_header = Module["_avformat_write_header"] = function() {
  return (_avformat_write_header = Module["_avformat_write_header"] = Module["asm"]["avformat_write_header"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_write_frame = Module["_av_write_frame"] = function() {
  return (_av_write_frame = Module["_av_write_frame"] = Module["asm"]["av_write_frame"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_write_trailer = Module["_av_write_trailer"] = function() {
  return (_av_write_trailer = Module["_av_write_trailer"] = Module["asm"]["av_write_trailer"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_interleaved_write_frame = Module["_av_interleaved_write_frame"] = function() {
  return (_av_interleaved_write_frame = Module["_av_interleaved_write_frame"] = Module["asm"]["av_interleaved_write_frame"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _close = Module["_close"] = function() {
  return (_close = Module["_close"] = Module["asm"]["close"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_shrink_packet = Module["_av_shrink_packet"] = function() {
  return (_av_shrink_packet = Module["_av_shrink_packet"] = Module["asm"]["av_shrink_packet"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_seek_frame = Module["_av_seek_frame"] = function() {
  return (_av_seek_frame = Module["_av_seek_frame"] = Module["asm"]["av_seek_frame"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avformat_flush = Module["_avformat_flush"] = function() {
  return (_avformat_flush = Module["_avformat_flush"] = Module["asm"]["avformat_flush"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_find_encoder = Module["_avcodec_find_encoder"] = function() {
  return (_avcodec_find_encoder = Module["_avcodec_find_encoder"] = Module["asm"]["avcodec_find_encoder"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_find_encoder_by_name = Module["_avcodec_find_encoder_by_name"] = function() {
  return (_avcodec_find_encoder_by_name = Module["_avcodec_find_encoder_by_name"] = Module["asm"]["avcodec_find_encoder_by_name"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_find_decoder_by_name = Module["_avcodec_find_decoder_by_name"] = function() {
  return (_avcodec_find_decoder_by_name = Module["_avcodec_find_decoder_by_name"] = Module["asm"]["avcodec_find_decoder_by_name"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_flush_buffers = Module["_avcodec_flush_buffers"] = function() {
  return (_avcodec_flush_buffers = Module["_avcodec_flush_buffers"] = Module["asm"]["avcodec_flush_buffers"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_close = Module["_avcodec_close"] = function() {
  return (_avcodec_close = Module["_avcodec_close"] = Module["asm"]["avcodec_close"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_descriptor_next = Module["_avcodec_descriptor_next"] = function() {
  return (_avcodec_descriptor_next = Module["_avcodec_descriptor_next"] = Module["asm"]["avcodec_descriptor_next"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_descriptor_get_by_name = Module["_avcodec_descriptor_get_by_name"] = function() {
  return (_avcodec_descriptor_get_by_name = Module["_avcodec_descriptor_get_by_name"] = Module["asm"]["avcodec_descriptor_get_by_name"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_send_frame = Module["_avcodec_send_frame"] = function() {
  return (_avcodec_send_frame = Module["_avcodec_send_frame"] = Module["asm"]["avcodec_send_frame"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avcodec_receive_packet = Module["_avcodec_receive_packet"] = function() {
  return (_avcodec_receive_packet = Module["_avcodec_receive_packet"] = Module["asm"]["avcodec_receive_packet"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avfilter_get_by_name = Module["_avfilter_get_by_name"] = function() {
  return (_avfilter_get_by_name = Module["_avfilter_get_by_name"] = Module["asm"]["avfilter_get_by_name"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avfilter_link = Module["_avfilter_link"] = function() {
  return (_avfilter_link = Module["_avfilter_link"] = Module["asm"]["avfilter_link"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avfilter_free = Module["_avfilter_free"] = function() {
  return (_avfilter_free = Module["_avfilter_free"] = Module["asm"]["avfilter_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avfilter_graph_alloc = Module["_avfilter_graph_alloc"] = function() {
  return (_avfilter_graph_alloc = Module["_avfilter_graph_alloc"] = Module["asm"]["avfilter_graph_alloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avfilter_graph_free = Module["_avfilter_graph_free"] = function() {
  return (_avfilter_graph_free = Module["_avfilter_graph_free"] = Module["asm"]["avfilter_graph_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avfilter_graph_config = Module["_avfilter_graph_config"] = function() {
  return (_avfilter_graph_config = Module["_avfilter_graph_config"] = Module["asm"]["avfilter_graph_config"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_buffersink_get_frame = Module["_av_buffersink_get_frame"] = function() {
  return (_av_buffersink_get_frame = Module["_av_buffersink_get_frame"] = Module["asm"]["av_buffersink_get_frame"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_buffersink_set_frame_size = Module["_av_buffersink_set_frame_size"] = function() {
  return (_av_buffersink_set_frame_size = Module["_av_buffersink_set_frame_size"] = Module["asm"]["av_buffersink_set_frame_size"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _av_buffersrc_add_frame_flags = Module["_av_buffersrc_add_frame_flags"] = function() {
  return (_av_buffersrc_add_frame_flags = Module["_av_buffersrc_add_frame_flags"] = Module["asm"]["av_buffersrc_add_frame_flags"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avfilter_inout_alloc = Module["_avfilter_inout_alloc"] = function() {
  return (_avfilter_inout_alloc = Module["_avfilter_inout_alloc"] = Module["asm"]["avfilter_inout_alloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avfilter_inout_free = Module["_avfilter_inout_free"] = function() {
  return (_avfilter_inout_free = Module["_avfilter_inout_free"] = Module["asm"]["avfilter_inout_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _avfilter_graph_parse = Module["_avfilter_graph_parse"] = function() {
  return (_avfilter_graph_parse = Module["_avfilter_graph_parse"] = Module["asm"]["avfilter_graph_parse"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _sws_freeContext = Module["_sws_freeContext"] = function() {
  return (_sws_freeContext = Module["_sws_freeContext"] = Module["asm"]["sws_freeContext"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _sws_scale_frame = Module["_sws_scale_frame"] = function() {
  return (_sws_scale_frame = Module["_sws_scale_frame"] = Module["asm"]["sws_scale_frame"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _sws_getContext = Module["_sws_getContext"] = function() {
  return (_sws_getContext = Module["_sws_getContext"] = Module["asm"]["sws_getContext"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = function() {
  return (_malloc = Module["_malloc"] = Module["asm"]["malloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emfiberthreads_timeout_expiry = Module["_emfiberthreads_timeout_expiry"] = function() {
  return (_emfiberthreads_timeout_expiry = Module["_emfiberthreads_timeout_expiry"] = Module["asm"]["emfiberthreads_timeout_expiry"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _dup2 = Module["_dup2"] = function() {
  return (_dup2 = Module["_dup2"] = Module["asm"]["dup2"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _calloc = Module["_calloc"] = function() {
  return (_calloc = Module["_calloc"] = Module["asm"]["calloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _strerror = Module["_strerror"] = function() {
  return (_strerror = Module["_strerror"] = Module["asm"]["strerror"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = function() {
  return (_emscripten_builtin_memalign = Module["_emscripten_builtin_memalign"] = Module["asm"]["emscripten_builtin_memalign"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = function() {
  return (_emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = Module["asm"]["emscripten_stack_set_limits"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = function() {
  return (_emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = Module["asm"]["emscripten_stack_get_base"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
  return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = function() {
  return (stackSave = Module["stackSave"] = Module["asm"]["stackSave"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = function() {
  return (stackRestore = Module["stackRestore"] = Module["asm"]["stackRestore"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = function() {
  return (stackAlloc = Module["stackAlloc"] = Module["asm"]["stackAlloc"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiii = Module["dynCall_iiii"] = function() {
  return (dynCall_iiii = Module["dynCall_iiii"] = Module["asm"]["dynCall_iiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ii = Module["dynCall_ii"] = function() {
  return (dynCall_ii = Module["dynCall_ii"] = Module["asm"]["dynCall_ii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiii = Module["dynCall_viiii"] = function() {
  return (dynCall_viiii = Module["dynCall_viiii"] = Module["asm"]["dynCall_viiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_dd = Module["dynCall_dd"] = function() {
  return (dynCall_dd = Module["dynCall_dd"] = Module["asm"]["dynCall_dd"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiii = Module["dynCall_iiiiii"] = function() {
  return (dynCall_iiiiii = Module["dynCall_iiiiii"] = Module["asm"]["dynCall_iiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iii = Module["dynCall_iii"] = function() {
  return (dynCall_iii = Module["dynCall_iii"] = Module["asm"]["dynCall_iii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vii = Module["dynCall_vii"] = function() {
  return (dynCall_vii = Module["dynCall_vii"] = Module["asm"]["dynCall_vii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiji = Module["dynCall_jiji"] = function() {
  return (dynCall_jiji = Module["dynCall_jiji"] = Module["asm"]["dynCall_jiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_v = Module["dynCall_v"] = function() {
  return (dynCall_v = Module["dynCall_v"] = Module["asm"]["dynCall_v"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiii = Module["dynCall_viiiiii"] = function() {
  return (dynCall_viiiiii = Module["dynCall_viiiiii"] = Module["asm"]["dynCall_viiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_vi = Module["dynCall_vi"] = function() {
  return (dynCall_vi = Module["dynCall_vi"] = Module["asm"]["dynCall_vi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiji = Module["dynCall_iiiji"] = function() {
  return (dynCall_iiiji = Module["dynCall_iiiji"] = Module["asm"]["dynCall_iiiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiiij = Module["dynCall_jiiij"] = function() {
  return (dynCall_jiiij = Module["dynCall_jiiij"] = Module["asm"]["dynCall_jiiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiii = Module["dynCall_iiiii"] = function() {
  return (dynCall_iiiii = Module["dynCall_iiiii"] = Module["asm"]["dynCall_iiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jiiji = Module["dynCall_jiiji"] = function() {
  return (dynCall_jiiji = Module["dynCall_jiiji"] = Module["asm"]["dynCall_jiiji"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_ijii = Module["dynCall_ijii"] = function() {
  return (dynCall_ijii = Module["dynCall_ijii"] = Module["asm"]["dynCall_ijii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = function() {
  return (dynCall_iiiiiii = Module["dynCall_iiiiiii"] = Module["asm"]["dynCall_iiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiij = Module["dynCall_viiiiij"] = function() {
  return (dynCall_viiiiij = Module["dynCall_viiiiij"] = Module["asm"]["dynCall_viiiiij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viii = Module["dynCall_viii"] = function() {
  return (dynCall_viii = Module["dynCall_viii"] = Module["asm"]["dynCall_viii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiii = Module["dynCall_viiiii"] = function() {
  return (dynCall_viiiii = Module["dynCall_viiiii"] = Module["asm"]["dynCall_viiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viifi = Module["dynCall_viifi"] = function() {
  return (dynCall_viifi = Module["dynCall_viifi"] = Module["asm"]["dynCall_viifi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_diii = Module["dynCall_diii"] = function() {
  return (dynCall_diii = Module["dynCall_diii"] = Module["asm"]["dynCall_diii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_fiii = Module["dynCall_fiii"] = function() {
  return (dynCall_fiii = Module["dynCall_fiii"] = Module["asm"]["dynCall_fiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viidi = Module["dynCall_viidi"] = function() {
  return (dynCall_viidi = Module["dynCall_viidi"] = Module["asm"]["dynCall_viidi"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiii"] = function() {
  return (dynCall_viiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiii"] = Module["asm"]["dynCall_viiiiiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = function() {
  return (dynCall_viiiiiii = Module["dynCall_viiiiiii"] = Module["asm"]["dynCall_viiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = function() {
  return (dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = Module["asm"]["dynCall_viiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = function() {
  return (dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = Module["asm"]["dynCall_iiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = function() {
  return (dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = Module["asm"]["dynCall_viiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_did = Module["dynCall_did"] = function() {
  return (dynCall_did = Module["dynCall_did"] = Module["asm"]["dynCall_did"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = function() {
  return (dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = Module["asm"]["dynCall_viiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiijj = Module["dynCall_viiijj"] = function() {
  return (dynCall_viiijj = Module["dynCall_viiijj"] = Module["asm"]["dynCall_viiijj"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiidiiddii = Module["dynCall_iiiiiiidiiddii"] = function() {
  return (dynCall_iiiiiiidiiddii = Module["dynCall_iiiiiiidiiddii"] = Module["asm"]["dynCall_iiiiiiidiiddii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jij = Module["dynCall_jij"] = function() {
  return (dynCall_jij = Module["dynCall_jij"] = Module["asm"]["dynCall_jij"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_jii = Module["dynCall_jii"] = function() {
  return (dynCall_jii = Module["dynCall_jii"] = Module["asm"]["dynCall_jii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiiiiii = Module["dynCall_viiiiiiiiiiii"] = function() {
  return (dynCall_viiiiiiiiiiii = Module["dynCall_viiiiiiiiiiii"] = Module["asm"]["dynCall_viiiiiiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = function() {
  return (dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = Module["asm"]["dynCall_iiiiiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var dynCall_iidiiii = Module["dynCall_iidiiii"] = function() {
  return (dynCall_iidiiii = Module["dynCall_iidiiii"] = Module["asm"]["dynCall_iidiiii"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _asyncify_start_unwind = Module["_asyncify_start_unwind"] = function() {
  return (_asyncify_start_unwind = Module["_asyncify_start_unwind"] = Module["asm"]["asyncify_start_unwind"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _asyncify_stop_unwind = Module["_asyncify_stop_unwind"] = function() {
  return (_asyncify_stop_unwind = Module["_asyncify_stop_unwind"] = Module["asm"]["asyncify_stop_unwind"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _asyncify_start_rewind = Module["_asyncify_start_rewind"] = function() {
  return (_asyncify_start_rewind = Module["_asyncify_start_rewind"] = Module["asm"]["asyncify_start_rewind"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _asyncify_stop_rewind = Module["_asyncify_stop_rewind"] = function() {
  return (_asyncify_stop_rewind = Module["_asyncify_stop_rewind"] = Module["asm"]["asyncify_stop_rewind"]).apply(null, arguments);
};





// === Auto-generated postamble setup entry stuff ===

Module["ccall"] = ccall;
Module["cwrap"] = cwrap;

var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  EXITSTATUS = status;

  if (keepRuntimeAlive()) {
  } else {
    exitRuntime();
  }

  procExit(status);
}

function procExit(code) {
  EXITSTATUS = code;
  if (!keepRuntimeAlive()) {
    if (Module['onExit']) Module['onExit'](code);
    ABORT = true;
  }
  quit_(code, new ExitStatus(code));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();





/*
 * Copyright (C) 2019-2024 Yahweasel and contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
 * CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

// A global promise chain for serialization of asyncify components
var serializationPromise = null;

function serially(f) {
    var p;
    if (serializationPromise) {
        p = serializationPromise.catch(function(){}).then(function() {
            return f();
        });
    } else {
        p = f();
    }
    serializationPromise = p = p.finally(function() {
        if (serializationPromise === p)
            serializationPromise = null;
    });
    return p;
}

// A global error passed through filesystem operations
Module.fsThrownError = null;

var ERRNO_CODES = {
    EPERM: 1,
    EIO: 5,
    EAGAIN: 6,
    ECANCELED: 11,
    ESPIPE: 29
};

// Callbacks for stream-based reader
var readerCallbacks = {
    open: function(stream) {
        if (stream.flags & 3) {
            // Opened in write mode, which can't work
            throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
    },

    close: function() {},

    read: function(stream, buffer, offset, length, position) {
        var data = Module.readBuffers[stream.node.name];

        if (!data || (data.buf.length === 0 && !data.eof)) {
            if (Module.onread) {
                try {
                    var rr = Module.onread(stream.node.name, position, length);
                    if (rr && rr.then && rr.catch) {
                        rr.catch(function(ex) {
                            ff_reader_dev_send(stream.node.name, null, {error: ex});
                        });
                    }
                } catch (ex) {
                    ff_reader_dev_send(stream.node.name, null, {error: ex});
                }
            }
            data = Module.readBuffers[stream.node.name];
        }

        if (!data)
            throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
        if (data.error) {
            Module.fsThrownError = data.error;
            throw new FS.ErrnoError(ERRNO_CODES.ECANCELED);
        }
        if (data.errorCode)
            throw new FS.ErrnoError(data.errorCode);
        if (data.buf.length === 0) {
            if (data.eof) {
                return 0;
            } else {
                data.ready = false;
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
        }

        var ret;
        if (length < data.buf.length) {
            // Cut a slice
            ret = data.buf.subarray(0, length);
            data.buf = data.buf.slice(length);
        } else {
            // Get the beginning
            ret = data.buf;
            data.buf = new Uint8Array(0);
        }

        (new Uint8Array(buffer.buffer)).set(ret, offset);
        return ret.length;
    },

    write: function() {
        throw new FS.ErrnoError(ERRNO_CODES.EIO);
    },

    llseek: function() {
        throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
    }
};

// Callbacks for block-based reader
var blockReaderCallbacks = {
    open: function(stream) {
        if (stream.flags & 3)
            throw new FS.ErrnoError(ERRNO_CODES.EPERM);
    },

    close: function() {},

    read: function(stream, buffer, offset, length, position) {
        var data = Module.blockReadBuffers[stream.node.name];
        if (!data)
            throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
        if (data.error) {
            Module.fsThrownError = data.error;
            throw new FS.ErrnoError(ERRNO_CODES.ECANCELED);
        }
        if (data.errorCode)
            throw new FS.ErrnoError(data.errorCode);

        var bufMin = data.position;
        var bufMax = data.position + data.buf.length;
        if (position < bufMin || position >= bufMax) {
            if (position >= stream.node.ff_block_reader_dev_size)
                return 0; // EOF

            if (!Module.onblockread)
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
            try {
                var brr = Module.onblockread(stream.node.name, position, length);
                if (brr && brr.then && brr.catch) {
                    brr.catch(function(ex) {
                        ff_block_reader_dev_send(stream.node.name, position, null, {error: ex});
                    });
                }
            } catch (ex) {
                Module.fsThrownError = ex;
                throw new FS.ErrnoError(ERRNO_CODES.ECANCELED);
            }

            // If it was asynchronous, this won't be ready yet
            bufMin = data.position;
            bufMax = data.position + data.buf.length;
            if (position < bufMin || position >= bufMax) {
                data.ready = false;
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
        }

        var bufPos = position - bufMin;
        var ret;
        if (bufPos + length < data.buf.length) {
            // Cut a slice
            ret = data.buf.subarray(bufPos, bufPos + length);
        } else {
            // Get the beginning of what was requested
            ret = data.buf.subarray(bufPos, data.buf.length);
        }

        (new Uint8Array(buffer.buffer)).set(ret, offset);
        return ret.length;
    },

    write: function() {
        throw new FS.ErrnoError(ERRNO_CODES.EIO);
    },

    llseek: function(stream, offset, whence) {
        if (whence === 2 /* SEEK_END */)
            offset = stream.node.size + offset;
        else if (whence === 1 /* SEEK_CUR */)
            offset += stream.position;
        return offset;
    }
};

// Callbacks for block-based writer
var writerCallbacks = {
    open: function(stream) {
        if (!(stream.flags & 1)) {
            // Opened in read mode, which can't work
            throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
    },

    close: function() {},

    read: function() {
        throw new FS.ErrnoError(ERRNO_CODES.EIO);
    },

    write: function(stream, buffer, offset, length, position) {
        if (!Module.onwrite)
            throw new FS.ErrnoError(ERRNO_CODES.EIO);
        Module.onwrite(stream.node.name, position, buffer.subarray(offset, offset + length));
        return length;
    },

    llseek: function(stream, offset, whence) {
        if (whence === 2)
            throw new FS.ErrnoError(ERRNO_CODES.EIO);
        else if (whence === 1)
            offset += stream.position;
        return offset;
    }
};

// Callbacks for stream-based writer
var streamWriterCallbacks = Object.create(writerCallbacks);
streamWriterCallbacks.write = function(stream, buffer, offset, length, position) {
    if (position != stream.position)
        throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
    return writerCallbacks.write(stream, buffer, offset, length, position);
};
streamWriterCallbacks.llseek = function() {
    throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
};

/* Filesystem for a writer directory. This is done by using MEMFS, but overriding
 * the stream operations. */
var streamWriterFS = Object.create(MEMFS);

streamWriterFS.mount = function(mount) {
    return streamWriterFS.createNode(null, "/", 0x4000 /* S_IFDIR */ | 0x1FF, 0);
}

streamWriterFS.createNode = function() {
    var node = MEMFS.createNode.apply(MEMFS, arguments);
    if (FS.isDir(node.mode)) {
        if (!streamWriterFS.dir_node_ops) {
            streamWriterFS.dir_node_ops = Object.create(node.node_ops);
            streamWriterFS.dir_node_ops.mknod = function(parent, name, mode, dev) {
                return streamWriterFS.createNode(parent, name, mode, dev);
            };
        }
        node.node_ops = streamWriterFS.dir_node_ops;

    } else if (FS.isFile(node.mode)) {
        node.stream_ops = writerCallbacks;

    }

    return node;
};

/* Original versions of all our functions, since the Module version is replaced
 * if we're a Worker */
var CAccessors = {};

var av_get_bytes_per_sample = Module.av_get_bytes_per_sample = CAccessors.av_get_bytes_per_sample = Module.cwrap("av_get_bytes_per_sample", "number", ["number"]);
var av_compare_ts_js = Module.av_compare_ts_js = CAccessors.av_compare_ts_js = Module.cwrap("av_compare_ts_js", "number", ["number","number","number","number","number","number","number","number"]);
var av_opt_set = Module.av_opt_set = CAccessors.av_opt_set = Module.cwrap("av_opt_set", "number", ["number","string","string","number"]);
var av_opt_set_int_list_js = Module.av_opt_set_int_list_js = CAccessors.av_opt_set_int_list_js = Module.cwrap("av_opt_set_int_list_js", "number", ["number","string","number","number","number","number"]);
var av_frame_alloc = Module.av_frame_alloc = CAccessors.av_frame_alloc = Module.cwrap("av_frame_alloc", "number", []);
var av_frame_clone = Module.av_frame_clone = CAccessors.av_frame_clone = Module.cwrap("av_frame_clone", "number", ["number","number"]);
var av_frame_free = Module.av_frame_free = CAccessors.av_frame_free = Module.cwrap("av_frame_free", null, ["number"]);
var av_frame_get_buffer = Module.av_frame_get_buffer = CAccessors.av_frame_get_buffer = Module.cwrap("av_frame_get_buffer", "number", ["number","number"]);
var av_frame_make_writable = Module.av_frame_make_writable = CAccessors.av_frame_make_writable = Module.cwrap("av_frame_make_writable", "number", ["number"]);
var av_frame_ref = Module.av_frame_ref = CAccessors.av_frame_ref = Module.cwrap("av_frame_ref", "number", ["number","number"]);
var av_frame_unref = Module.av_frame_unref = CAccessors.av_frame_unref = Module.cwrap("av_frame_unref", null, ["number"]);
var ff_frame_rescale_ts_js = Module.ff_frame_rescale_ts_js = CAccessors.ff_frame_rescale_ts_js = Module.cwrap("ff_frame_rescale_ts_js", null, ["number","number","number","number","number"]);
var av_log_get_level = Module.av_log_get_level = CAccessors.av_log_get_level = Module.cwrap("av_log_get_level", "number", []);
var av_log_set_level = Module.av_log_set_level = CAccessors.av_log_set_level = Module.cwrap("av_log_set_level", null, ["number"]);
var av_packet_alloc = Module.av_packet_alloc = CAccessors.av_packet_alloc = Module.cwrap("av_packet_alloc", "number", []);
var av_packet_clone = Module.av_packet_clone = CAccessors.av_packet_clone = Module.cwrap("av_packet_clone", "number", ["number"]);
var av_packet_free = Module.av_packet_free = CAccessors.av_packet_free = Module.cwrap("av_packet_free", null, ["number"]);
var av_packet_new_side_data = Module.av_packet_new_side_data = CAccessors.av_packet_new_side_data = Module.cwrap("av_packet_new_side_data", "number", ["number","number","number"]);
var av_packet_ref = Module.av_packet_ref = CAccessors.av_packet_ref = Module.cwrap("av_packet_ref", "number", ["number","number"]);
var av_packet_rescale_ts_js = Module.av_packet_rescale_ts_js = CAccessors.av_packet_rescale_ts_js = Module.cwrap("av_packet_rescale_ts_js", null, ["number","number","number","number","number"]);
var av_packet_unref = Module.av_packet_unref = CAccessors.av_packet_unref = Module.cwrap("av_packet_unref", null, ["number"]);
var av_strdup = Module.av_strdup = CAccessors.av_strdup = Module.cwrap("av_strdup", "number", ["string"]);
var av_buffersink_get_frame = Module.av_buffersink_get_frame = CAccessors.av_buffersink_get_frame = Module.cwrap("av_buffersink_get_frame", "number", ["number","number"]);
var av_buffersink_get_time_base_num = Module.av_buffersink_get_time_base_num = CAccessors.av_buffersink_get_time_base_num = Module.cwrap("av_buffersink_get_time_base_num", "number", ["number"]);
var av_buffersink_get_time_base_den = Module.av_buffersink_get_time_base_den = CAccessors.av_buffersink_get_time_base_den = Module.cwrap("av_buffersink_get_time_base_den", "number", ["number"]);
var av_buffersink_set_frame_size = Module.av_buffersink_set_frame_size = CAccessors.av_buffersink_set_frame_size = Module.cwrap("av_buffersink_set_frame_size", null, ["number","number"]);
var ff_buffersink_set_ch_layout = Module.ff_buffersink_set_ch_layout = CAccessors.ff_buffersink_set_ch_layout = Module.cwrap("ff_buffersink_set_ch_layout", "number", ["number","number","number"]);
var av_buffersrc_add_frame_flags = Module.av_buffersrc_add_frame_flags = CAccessors.av_buffersrc_add_frame_flags = Module.cwrap("av_buffersrc_add_frame_flags", "number", ["number","number","number"]);
var avfilter_free = Module.avfilter_free = CAccessors.avfilter_free = Module.cwrap("avfilter_free", null, ["number"]);
var avfilter_get_by_name = Module.avfilter_get_by_name = CAccessors.avfilter_get_by_name = Module.cwrap("avfilter_get_by_name", "number", ["string"]);
var avfilter_graph_alloc = Module.avfilter_graph_alloc = CAccessors.avfilter_graph_alloc = Module.cwrap("avfilter_graph_alloc", "number", []);
var avfilter_graph_config = Module.avfilter_graph_config = CAccessors.avfilter_graph_config = Module.cwrap("avfilter_graph_config", "number", ["number","number"]);
var avfilter_graph_create_filter_js = Module.avfilter_graph_create_filter_js = CAccessors.avfilter_graph_create_filter_js = Module.cwrap("avfilter_graph_create_filter_js", "number", ["number","string","string","number","number"]);
var avfilter_graph_free = Module.avfilter_graph_free = CAccessors.avfilter_graph_free = Module.cwrap("avfilter_graph_free", null, ["number"]);
var avfilter_graph_parse = Module.avfilter_graph_parse = CAccessors.avfilter_graph_parse = Module.cwrap("avfilter_graph_parse", "number", ["number","string","number","number","number"]);
var avfilter_inout_alloc = Module.avfilter_inout_alloc = CAccessors.avfilter_inout_alloc = Module.cwrap("avfilter_inout_alloc", "number", []);
var avfilter_inout_free = Module.avfilter_inout_free = CAccessors.avfilter_inout_free = Module.cwrap("avfilter_inout_free", null, ["number"]);
var avfilter_link = Module.avfilter_link = CAccessors.avfilter_link = Module.cwrap("avfilter_link", "number", ["number","number","number","number"]);
var avcodec_alloc_context3 = Module.avcodec_alloc_context3 = CAccessors.avcodec_alloc_context3 = Module.cwrap("avcodec_alloc_context3", "number", ["number"]);
var avcodec_close = Module.avcodec_close = CAccessors.avcodec_close = Module.cwrap("avcodec_close", "number", ["number"]);
var avcodec_descriptor_get = Module.avcodec_descriptor_get = CAccessors.avcodec_descriptor_get = Module.cwrap("avcodec_descriptor_get", "number", ["number"]);
var avcodec_descriptor_get_by_name = Module.avcodec_descriptor_get_by_name = CAccessors.avcodec_descriptor_get_by_name = Module.cwrap("avcodec_descriptor_get_by_name", "number", ["string"]);
var avcodec_descriptor_next = Module.avcodec_descriptor_next = CAccessors.avcodec_descriptor_next = Module.cwrap("avcodec_descriptor_next", "number", ["number"]);
var avcodec_find_decoder = Module.avcodec_find_decoder = CAccessors.avcodec_find_decoder = Module.cwrap("avcodec_find_decoder", "number", ["number"]);
var avcodec_find_decoder_by_name = Module.avcodec_find_decoder_by_name = CAccessors.avcodec_find_decoder_by_name = Module.cwrap("avcodec_find_decoder_by_name", "number", ["string"]);
var avcodec_find_encoder = Module.avcodec_find_encoder = CAccessors.avcodec_find_encoder = Module.cwrap("avcodec_find_encoder", "number", ["number"]);
var avcodec_find_encoder_by_name = Module.avcodec_find_encoder_by_name = CAccessors.avcodec_find_encoder_by_name = Module.cwrap("avcodec_find_encoder_by_name", "number", ["string"]);
var avcodec_flush_buffers = Module.avcodec_flush_buffers = CAccessors.avcodec_flush_buffers = Module.cwrap("avcodec_flush_buffers", null, ["number"]);
var avcodec_free_context = Module.avcodec_free_context = CAccessors.avcodec_free_context = Module.cwrap("avcodec_free_context", null, ["number"]);
var avcodec_get_name = Module.avcodec_get_name = CAccessors.avcodec_get_name = Module.cwrap("avcodec_get_name", "string", ["number"]);
var avcodec_open2 = Module.avcodec_open2 = CAccessors.avcodec_open2 = Module.cwrap("avcodec_open2", "number", ["number","number","number"]);
var avcodec_open2_js = Module.avcodec_open2_js = CAccessors.avcodec_open2_js = Module.cwrap("avcodec_open2_js", "number", ["number","number","number"]);
var avcodec_parameters_alloc = Module.avcodec_parameters_alloc = CAccessors.avcodec_parameters_alloc = Module.cwrap("avcodec_parameters_alloc", "number", []);
var avcodec_parameters_copy = Module.avcodec_parameters_copy = CAccessors.avcodec_parameters_copy = Module.cwrap("avcodec_parameters_copy", "number", ["number","number"]);
var avcodec_parameters_free = Module.avcodec_parameters_free = CAccessors.avcodec_parameters_free = Module.cwrap("avcodec_parameters_free", null, ["number"]);
var avcodec_parameters_from_context = Module.avcodec_parameters_from_context = CAccessors.avcodec_parameters_from_context = Module.cwrap("avcodec_parameters_from_context", "number", ["number","number"]);
var avcodec_parameters_to_context = Module.avcodec_parameters_to_context = CAccessors.avcodec_parameters_to_context = Module.cwrap("avcodec_parameters_to_context", "number", ["number","number"]);
var avcodec_receive_frame = Module.avcodec_receive_frame = CAccessors.avcodec_receive_frame = Module.cwrap("avcodec_receive_frame", "number", ["number","number"]);
var avcodec_receive_packet = Module.avcodec_receive_packet = CAccessors.avcodec_receive_packet = Module.cwrap("avcodec_receive_packet", "number", ["number","number"]);
var avcodec_send_frame = Module.avcodec_send_frame = CAccessors.avcodec_send_frame = Module.cwrap("avcodec_send_frame", "number", ["number","number"]);
var avcodec_send_packet = Module.avcodec_send_packet = CAccessors.avcodec_send_packet = Module.cwrap("avcodec_send_packet", "number", ["number","number"]);
var av_find_input_format = Module.av_find_input_format = CAccessors.av_find_input_format = Module.cwrap("av_find_input_format", "number", ["string"]);
var avformat_alloc_context = Module.avformat_alloc_context = CAccessors.avformat_alloc_context = Module.cwrap("avformat_alloc_context", "number", []);
var avformat_alloc_output_context2_js = Module.avformat_alloc_output_context2_js = CAccessors.avformat_alloc_output_context2_js = Module.cwrap("avformat_alloc_output_context2_js", "number", ["number","string","string"]);
var avformat_close_input = Module.avformat_close_input = CAccessors.avformat_close_input = Module.cwrap("avformat_close_input", null, ["number"]);
var avformat_find_stream_info = Module.avformat_find_stream_info = CAccessors.avformat_find_stream_info = Module.cwrap("avformat_find_stream_info", "number", ["number","number"], {async:true});
var avformat_find_stream_info__raw = avformat_find_stream_info; avformat_find_stream_info = Module.avformat_find_stream_info = function() { var args = arguments; var ret = avformat_find_stream_info__raw.apply(void 0, args); if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) { return ret.then(function(ret) { if (ret === -11) throw Module.fsThrownError; return ret; }); } return ret; }; Module.avformat_find_stream_info = function() { var args = arguments; return serially(function() { return avformat_find_stream_info.apply(void 0, args); }); };
var avformat_flush = Module.avformat_flush = CAccessors.avformat_flush = Module.cwrap("avformat_flush", "number", ["number"]);
var avformat_free_context = Module.avformat_free_context = CAccessors.avformat_free_context = Module.cwrap("avformat_free_context", null, ["number"]);
var avformat_new_stream = Module.avformat_new_stream = CAccessors.avformat_new_stream = Module.cwrap("avformat_new_stream", "number", ["number","number"]);
var avformat_open_input = Module.avformat_open_input = CAccessors.avformat_open_input = Module.cwrap("avformat_open_input", "number", ["number","string","number","number"], {async:true});
var avformat_open_input__raw = avformat_open_input; avformat_open_input = Module.avformat_open_input = function() { var args = arguments; var ret = avformat_open_input__raw.apply(void 0, args); if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) { return ret.then(function(ret) { if (ret === -11) throw Module.fsThrownError; return ret; }); } return ret; }; Module.avformat_open_input = function() { var args = arguments; return serially(function() { return avformat_open_input.apply(void 0, args); }); };
var avformat_open_input_js = Module.avformat_open_input_js = CAccessors.avformat_open_input_js = Module.cwrap("avformat_open_input_js", "number", ["string","number","number"], {async:true});
var avformat_open_input_js__raw = avformat_open_input_js; avformat_open_input_js = Module.avformat_open_input_js = function() { var args = arguments; var ret = avformat_open_input_js__raw.apply(void 0, args); if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) { return ret.then(function(ret) { if (ret === -11) throw Module.fsThrownError; return ret; }); } return ret; }; Module.avformat_open_input_js = function() { var args = arguments; return serially(function() { return avformat_open_input_js.apply(void 0, args); }); };
var av_seek_frame = Module.av_seek_frame = CAccessors.av_seek_frame = Module.cwrap("av_seek_frame", "number", ["number","number","number","number"], {async:true});
var av_seek_frame__raw = av_seek_frame; av_seek_frame = Module.av_seek_frame = function() { var args = arguments; var ret = av_seek_frame__raw.apply(void 0, args); if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) { return ret.then(function(ret) { if (ret === -11) throw Module.fsThrownError; return ret; }); } return ret; }; Module.av_seek_frame = function() { var args = arguments; return serially(function() { return av_seek_frame.apply(void 0, args); }); };
var avformat_seek_file = Module.avformat_seek_file = CAccessors.avformat_seek_file = Module.cwrap("avformat_seek_file", "number", ["number","number","number","number","number","number"], {async:true});
var avformat_seek_file__raw = avformat_seek_file; avformat_seek_file = Module.avformat_seek_file = function() { var args = arguments; var ret = avformat_seek_file__raw.apply(void 0, args); if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) { return ret.then(function(ret) { if (ret === -11) throw Module.fsThrownError; return ret; }); } return ret; }; Module.avformat_seek_file = function() { var args = arguments; return serially(function() { return avformat_seek_file.apply(void 0, args); }); };
var avformat_seek_file_min = Module.avformat_seek_file_min = CAccessors.avformat_seek_file_min = Module.cwrap("avformat_seek_file_min", "number", ["number","number","number","number"], {async:true});
var avformat_seek_file_min__raw = avformat_seek_file_min; avformat_seek_file_min = Module.avformat_seek_file_min = function() { var args = arguments; var ret = avformat_seek_file_min__raw.apply(void 0, args); if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) { return ret.then(function(ret) { if (ret === -11) throw Module.fsThrownError; return ret; }); } return ret; }; Module.avformat_seek_file_min = function() { var args = arguments; return serially(function() { return avformat_seek_file_min.apply(void 0, args); }); };
var avformat_seek_file_max = Module.avformat_seek_file_max = CAccessors.avformat_seek_file_max = Module.cwrap("avformat_seek_file_max", "number", ["number","number","number","number"], {async:true});
var avformat_seek_file_max__raw = avformat_seek_file_max; avformat_seek_file_max = Module.avformat_seek_file_max = function() { var args = arguments; var ret = avformat_seek_file_max__raw.apply(void 0, args); if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) { return ret.then(function(ret) { if (ret === -11) throw Module.fsThrownError; return ret; }); } return ret; }; Module.avformat_seek_file_max = function() { var args = arguments; return serially(function() { return avformat_seek_file_max.apply(void 0, args); }); };
var avformat_seek_file_approx = Module.avformat_seek_file_approx = CAccessors.avformat_seek_file_approx = Module.cwrap("avformat_seek_file_approx", "number", ["number","number","number","number"], {async:true});
var avformat_seek_file_approx__raw = avformat_seek_file_approx; avformat_seek_file_approx = Module.avformat_seek_file_approx = function() { var args = arguments; var ret = avformat_seek_file_approx__raw.apply(void 0, args); if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) { return ret.then(function(ret) { if (ret === -11) throw Module.fsThrownError; return ret; }); } return ret; }; Module.avformat_seek_file_approx = function() { var args = arguments; return serially(function() { return avformat_seek_file_approx.apply(void 0, args); }); };
var avformat_write_header = Module.avformat_write_header = CAccessors.avformat_write_header = Module.cwrap("avformat_write_header", "number", ["number","number"]);
var avio_open2_js = Module.avio_open2_js = CAccessors.avio_open2_js = Module.cwrap("avio_open2_js", "number", ["string","number","number","number"]);
var avio_close = Module.avio_close = CAccessors.avio_close = Module.cwrap("avio_close", "number", ["number"]);
var avio_flush = Module.avio_flush = CAccessors.avio_flush = Module.cwrap("avio_flush", null, ["number"]);
var av_find_best_stream = Module.av_find_best_stream = CAccessors.av_find_best_stream = Module.cwrap("av_find_best_stream", "number", ["number","number","number","number","number","number"]);
var av_get_sample_fmt_name = Module.av_get_sample_fmt_name = CAccessors.av_get_sample_fmt_name = Module.cwrap("av_get_sample_fmt_name", "string", ["number"]);
var av_grow_packet = Module.av_grow_packet = CAccessors.av_grow_packet = Module.cwrap("av_grow_packet", "number", ["number","number"]);
var av_interleaved_write_frame = Module.av_interleaved_write_frame = CAccessors.av_interleaved_write_frame = Module.cwrap("av_interleaved_write_frame", "number", ["number","number"]);
var av_packet_make_writable = Module.av_packet_make_writable = CAccessors.av_packet_make_writable = Module.cwrap("av_packet_make_writable", "number", ["number"]);
var av_pix_fmt_desc_get = Module.av_pix_fmt_desc_get = CAccessors.av_pix_fmt_desc_get = Module.cwrap("av_pix_fmt_desc_get", "number", ["number"]);
var av_read_frame = Module.av_read_frame = CAccessors.av_read_frame = Module.cwrap("av_read_frame", "number", ["number","number"], {async:true});
var av_read_frame__raw = av_read_frame; av_read_frame = Module.av_read_frame = function() { var args = arguments; var ret = av_read_frame__raw.apply(void 0, args); if (ret === -11) throw Module.fsThrownError; else if (ret && ret.then) { return ret.then(function(ret) { if (ret === -11) throw Module.fsThrownError; return ret; }); } return ret; }; Module.av_read_frame = function() { var args = arguments; return serially(function() { return av_read_frame.apply(void 0, args); }); };
var av_shrink_packet = Module.av_shrink_packet = CAccessors.av_shrink_packet = Module.cwrap("av_shrink_packet", null, ["number","number"]);
var av_write_frame = Module.av_write_frame = CAccessors.av_write_frame = Module.cwrap("av_write_frame", "number", ["number","number"]);
var av_write_trailer = Module.av_write_trailer = CAccessors.av_write_trailer = Module.cwrap("av_write_trailer", "number", ["number"]);
var av_dict_copy_js = Module.av_dict_copy_js = CAccessors.av_dict_copy_js = Module.cwrap("av_dict_copy_js", "number", ["number","number","number"]);
var av_dict_free = Module.av_dict_free = CAccessors.av_dict_free = Module.cwrap("av_dict_free", null, ["number"]);
var av_dict_set_js = Module.av_dict_set_js = CAccessors.av_dict_set_js = Module.cwrap("av_dict_set_js", "number", ["number","string","string","number"]);
var sws_getContext = Module.sws_getContext = CAccessors.sws_getContext = Module.cwrap("sws_getContext", "number", ["number","number","number","number","number","number","number","number","number","number"]);
var sws_freeContext = Module.sws_freeContext = CAccessors.sws_freeContext = Module.cwrap("sws_freeContext", null, ["number"]);
var sws_scale_frame = Module.sws_scale_frame = CAccessors.sws_scale_frame = Module.cwrap("sws_scale_frame", "number", ["number","number","number"]);
var AVPacketSideData_data = Module.AVPacketSideData_data = CAccessors.AVPacketSideData_data = Module.cwrap("AVPacketSideData_data", "number", ["number","number"]);
var AVPacketSideData_size = Module.AVPacketSideData_size = CAccessors.AVPacketSideData_size = Module.cwrap("AVPacketSideData_size", "number", ["number","number"]);
var AVPacketSideData_type = Module.AVPacketSideData_type = CAccessors.AVPacketSideData_type = Module.cwrap("AVPacketSideData_type", "number", ["number","number"]);
var AVPixFmtDescriptor_comp_depth = Module.AVPixFmtDescriptor_comp_depth = CAccessors.AVPixFmtDescriptor_comp_depth = Module.cwrap("AVPixFmtDescriptor_comp_depth", "number", ["number","number"]);
var ff_error = Module.ff_error = CAccessors.ff_error = Module.cwrap("ff_error", "string", ["number"]);
var ff_nothing = Module.ff_nothing = CAccessors.ff_nothing = Module.cwrap("ff_nothing", null, [], {async:true});
Module.ff_nothing = function() { var args = arguments; return serially(function() { return ff_nothing.apply(void 0, args); }); };
var calloc = Module.calloc = CAccessors.calloc = Module.cwrap("calloc", "number", ["number","number"]);
var close = Module.close = CAccessors.close = Module.cwrap("close", "number", ["number"]);
var dup2 = Module.dup2 = CAccessors.dup2 = Module.cwrap("dup2", "number", ["number","number"]);
var free = Module.free = CAccessors.free = Module.cwrap("free", null, ["number"]);
var malloc = Module.malloc = CAccessors.malloc = Module.cwrap("malloc", "number", ["number"]);
var mallinfo_uordblks = Module.mallinfo_uordblks = CAccessors.mallinfo_uordblks = Module.cwrap("mallinfo_uordblks", "number", []);
var open = Module.open = CAccessors.open = Module.cwrap("open", "number", ["string","number","number"]);
var strerror = Module.strerror = CAccessors.strerror = Module.cwrap("strerror", "string", ["number"]);
var libavjs_with_swscale = Module.libavjs_with_swscale = CAccessors.libavjs_with_swscale = Module.cwrap("libavjs_with_swscale", "number", []);
var libavjs_create_main_thread = Module.libavjs_create_main_thread = CAccessors.libavjs_create_main_thread = Module.cwrap("libavjs_create_main_thread", "number", []);
var ffmpeg_main = Module.ffmpeg_main = CAccessors.ffmpeg_main = Module.cwrap("ffmpeg_main", "number", ["number","number"], {async:true});
Module.ffmpeg_main = function() { var args = arguments; return serially(function() { return ffmpeg_main.apply(void 0, args); }); };
var ffprobe_main = Module.ffprobe_main = CAccessors.ffprobe_main = Module.cwrap("ffprobe_main", "number", ["number","number"], {async:true});
Module.ffprobe_main = function() { var args = arguments; return serially(function() { return ffprobe_main.apply(void 0, args); }); };
var AVFrame_channel_layout = Module.AVFrame_channel_layout = CAccessors.AVFrame_channel_layout = Module.cwrap("AVFrame_channel_layout", "number", ["number"]);
var AVFrame_channel_layout_s = Module.AVFrame_channel_layout_s = CAccessors.AVFrame_channel_layout_s = Module.cwrap("AVFrame_channel_layout_s", null, ["number", "number"]);
var AVFrame_channel_layouthi = Module.AVFrame_channel_layouthi = CAccessors.AVFrame_channel_layouthi = Module.cwrap("AVFrame_channel_layouthi", "number", ["number"]);
var AVFrame_channel_layouthi_s = Module.AVFrame_channel_layouthi_s = CAccessors.AVFrame_channel_layouthi_s = Module.cwrap("AVFrame_channel_layouthi_s", null, ["number", "number"]);
var AVFrame_channels = Module.AVFrame_channels = CAccessors.AVFrame_channels = Module.cwrap("AVFrame_channels", "number", ["number"]);
var AVFrame_channels_s = Module.AVFrame_channels_s = CAccessors.AVFrame_channels_s = Module.cwrap("AVFrame_channels_s", null, ["number", "number"]);
var AVFrame_channel_layoutmask = Module.AVFrame_channel_layoutmask = CAccessors.AVFrame_channel_layoutmask = Module.cwrap("AVFrame_channel_layoutmask", "number", ["number"]);
var AVFrame_channel_layoutmask_s = Module.AVFrame_channel_layoutmask_s = CAccessors.AVFrame_channel_layoutmask_s = Module.cwrap("AVFrame_channel_layoutmask_s", null, ["number", "number"]);
var AVFrame_ch_layout_nb_channels = Module.AVFrame_ch_layout_nb_channels = CAccessors.AVFrame_ch_layout_nb_channels = Module.cwrap("AVFrame_ch_layout_nb_channels", "number", ["number"]);
var AVFrame_ch_layout_nb_channels_s = Module.AVFrame_ch_layout_nb_channels_s = CAccessors.AVFrame_ch_layout_nb_channels_s = Module.cwrap("AVFrame_ch_layout_nb_channels_s", null, ["number", "number"]);
var AVFrame_crop_bottom = Module.AVFrame_crop_bottom = CAccessors.AVFrame_crop_bottom = Module.cwrap("AVFrame_crop_bottom", "number", ["number"]);
var AVFrame_crop_bottom_s = Module.AVFrame_crop_bottom_s = CAccessors.AVFrame_crop_bottom_s = Module.cwrap("AVFrame_crop_bottom_s", null, ["number", "number"]);
var AVFrame_crop_left = Module.AVFrame_crop_left = CAccessors.AVFrame_crop_left = Module.cwrap("AVFrame_crop_left", "number", ["number"]);
var AVFrame_crop_left_s = Module.AVFrame_crop_left_s = CAccessors.AVFrame_crop_left_s = Module.cwrap("AVFrame_crop_left_s", null, ["number", "number"]);
var AVFrame_crop_right = Module.AVFrame_crop_right = CAccessors.AVFrame_crop_right = Module.cwrap("AVFrame_crop_right", "number", ["number"]);
var AVFrame_crop_right_s = Module.AVFrame_crop_right_s = CAccessors.AVFrame_crop_right_s = Module.cwrap("AVFrame_crop_right_s", null, ["number", "number"]);
var AVFrame_crop_top = Module.AVFrame_crop_top = CAccessors.AVFrame_crop_top = Module.cwrap("AVFrame_crop_top", "number", ["number"]);
var AVFrame_crop_top_s = Module.AVFrame_crop_top_s = CAccessors.AVFrame_crop_top_s = Module.cwrap("AVFrame_crop_top_s", null, ["number", "number"]);
var AVFrame_data_a = Module.AVFrame_data_a = CAccessors.AVFrame_data_a = Module.cwrap("AVFrame_data_a", "number", ["number", "number"]);
var AVFrame_data_a_s = Module.AVFrame_data_a_s = CAccessors.AVFrame_data_a_s = Module.cwrap("AVFrame_data_a_s", null, ["number", "number", "number"]);
var AVFrame_format = Module.AVFrame_format = CAccessors.AVFrame_format = Module.cwrap("AVFrame_format", "number", ["number"]);
var AVFrame_format_s = Module.AVFrame_format_s = CAccessors.AVFrame_format_s = Module.cwrap("AVFrame_format_s", null, ["number", "number"]);
var AVFrame_height = Module.AVFrame_height = CAccessors.AVFrame_height = Module.cwrap("AVFrame_height", "number", ["number"]);
var AVFrame_height_s = Module.AVFrame_height_s = CAccessors.AVFrame_height_s = Module.cwrap("AVFrame_height_s", null, ["number", "number"]);
var AVFrame_key_frame = Module.AVFrame_key_frame = CAccessors.AVFrame_key_frame = Module.cwrap("AVFrame_key_frame", "number", ["number"]);
var AVFrame_key_frame_s = Module.AVFrame_key_frame_s = CAccessors.AVFrame_key_frame_s = Module.cwrap("AVFrame_key_frame_s", null, ["number", "number"]);
var AVFrame_linesize_a = Module.AVFrame_linesize_a = CAccessors.AVFrame_linesize_a = Module.cwrap("AVFrame_linesize_a", "number", ["number", "number"]);
var AVFrame_linesize_a_s = Module.AVFrame_linesize_a_s = CAccessors.AVFrame_linesize_a_s = Module.cwrap("AVFrame_linesize_a_s", null, ["number", "number", "number"]);
var AVFrame_nb_samples = Module.AVFrame_nb_samples = CAccessors.AVFrame_nb_samples = Module.cwrap("AVFrame_nb_samples", "number", ["number"]);
var AVFrame_nb_samples_s = Module.AVFrame_nb_samples_s = CAccessors.AVFrame_nb_samples_s = Module.cwrap("AVFrame_nb_samples_s", null, ["number", "number"]);
var AVFrame_pict_type = Module.AVFrame_pict_type = CAccessors.AVFrame_pict_type = Module.cwrap("AVFrame_pict_type", "number", ["number"]);
var AVFrame_pict_type_s = Module.AVFrame_pict_type_s = CAccessors.AVFrame_pict_type_s = Module.cwrap("AVFrame_pict_type_s", null, ["number", "number"]);
var AVFrame_pts = Module.AVFrame_pts = CAccessors.AVFrame_pts = Module.cwrap("AVFrame_pts", "number", ["number"]);
var AVFrame_pts_s = Module.AVFrame_pts_s = CAccessors.AVFrame_pts_s = Module.cwrap("AVFrame_pts_s", null, ["number", "number"]);
var AVFrame_ptshi = Module.AVFrame_ptshi = CAccessors.AVFrame_ptshi = Module.cwrap("AVFrame_ptshi", "number", ["number"]);
var AVFrame_ptshi_s = Module.AVFrame_ptshi_s = CAccessors.AVFrame_ptshi_s = Module.cwrap("AVFrame_ptshi_s", null, ["number", "number"]);
var AVFrame_sample_aspect_ratio_num = Module.AVFrame_sample_aspect_ratio_num = CAccessors.AVFrame_sample_aspect_ratio_num = Module.cwrap("AVFrame_sample_aspect_ratio_num", "number", ["number"]);
var AVFrame_sample_aspect_ratio_num_s = Module.AVFrame_sample_aspect_ratio_num_s = CAccessors.AVFrame_sample_aspect_ratio_num_s = Module.cwrap("AVFrame_sample_aspect_ratio_num_s", null, ["number", "number"]);
var AVFrame_sample_aspect_ratio_den = Module.AVFrame_sample_aspect_ratio_den = CAccessors.AVFrame_sample_aspect_ratio_den = Module.cwrap("AVFrame_sample_aspect_ratio_den", "number", ["number"]);
var AVFrame_sample_aspect_ratio_den_s = Module.AVFrame_sample_aspect_ratio_den_s = CAccessors.AVFrame_sample_aspect_ratio_den_s = Module.cwrap("AVFrame_sample_aspect_ratio_den_s", null, ["number", "number"]);
var AVFrame_sample_aspect_ratio_s = Module.AVFrame_sample_aspect_ratio_s = CAccessors.AVFrame_sample_aspect_ratio_s = Module.cwrap("AVFrame_sample_aspect_ratio_s", null, ["number", "number", "number"]);
var AVFrame_sample_rate = Module.AVFrame_sample_rate = CAccessors.AVFrame_sample_rate = Module.cwrap("AVFrame_sample_rate", "number", ["number"]);
var AVFrame_sample_rate_s = Module.AVFrame_sample_rate_s = CAccessors.AVFrame_sample_rate_s = Module.cwrap("AVFrame_sample_rate_s", null, ["number", "number"]);
var AVFrame_time_base_num = Module.AVFrame_time_base_num = CAccessors.AVFrame_time_base_num = Module.cwrap("AVFrame_time_base_num", "number", ["number"]);
var AVFrame_time_base_num_s = Module.AVFrame_time_base_num_s = CAccessors.AVFrame_time_base_num_s = Module.cwrap("AVFrame_time_base_num_s", null, ["number", "number"]);
var AVFrame_time_base_den = Module.AVFrame_time_base_den = CAccessors.AVFrame_time_base_den = Module.cwrap("AVFrame_time_base_den", "number", ["number"]);
var AVFrame_time_base_den_s = Module.AVFrame_time_base_den_s = CAccessors.AVFrame_time_base_den_s = Module.cwrap("AVFrame_time_base_den_s", null, ["number", "number"]);
var AVFrame_time_base_s = Module.AVFrame_time_base_s = CAccessors.AVFrame_time_base_s = Module.cwrap("AVFrame_time_base_s", null, ["number", "number", "number"]);
var AVFrame_width = Module.AVFrame_width = CAccessors.AVFrame_width = Module.cwrap("AVFrame_width", "number", ["number"]);
var AVFrame_width_s = Module.AVFrame_width_s = CAccessors.AVFrame_width_s = Module.cwrap("AVFrame_width_s", null, ["number", "number"]);
var AVPixFmtDescriptor_flags = Module.AVPixFmtDescriptor_flags = CAccessors.AVPixFmtDescriptor_flags = Module.cwrap("AVPixFmtDescriptor_flags", "number", ["number"]);
var AVPixFmtDescriptor_flags_s = Module.AVPixFmtDescriptor_flags_s = CAccessors.AVPixFmtDescriptor_flags_s = Module.cwrap("AVPixFmtDescriptor_flags_s", null, ["number", "number"]);
var AVPixFmtDescriptor_log2_chroma_h = Module.AVPixFmtDescriptor_log2_chroma_h = CAccessors.AVPixFmtDescriptor_log2_chroma_h = Module.cwrap("AVPixFmtDescriptor_log2_chroma_h", "number", ["number"]);
var AVPixFmtDescriptor_log2_chroma_h_s = Module.AVPixFmtDescriptor_log2_chroma_h_s = CAccessors.AVPixFmtDescriptor_log2_chroma_h_s = Module.cwrap("AVPixFmtDescriptor_log2_chroma_h_s", null, ["number", "number"]);
var AVPixFmtDescriptor_log2_chroma_w = Module.AVPixFmtDescriptor_log2_chroma_w = CAccessors.AVPixFmtDescriptor_log2_chroma_w = Module.cwrap("AVPixFmtDescriptor_log2_chroma_w", "number", ["number"]);
var AVPixFmtDescriptor_log2_chroma_w_s = Module.AVPixFmtDescriptor_log2_chroma_w_s = CAccessors.AVPixFmtDescriptor_log2_chroma_w_s = Module.cwrap("AVPixFmtDescriptor_log2_chroma_w_s", null, ["number", "number"]);
var AVPixFmtDescriptor_nb_components = Module.AVPixFmtDescriptor_nb_components = CAccessors.AVPixFmtDescriptor_nb_components = Module.cwrap("AVPixFmtDescriptor_nb_components", "number", ["number"]);
var AVPixFmtDescriptor_nb_components_s = Module.AVPixFmtDescriptor_nb_components_s = CAccessors.AVPixFmtDescriptor_nb_components_s = Module.cwrap("AVPixFmtDescriptor_nb_components_s", null, ["number", "number"]);
var AVCodec_name = Module.AVCodec_name = CAccessors.AVCodec_name = Module.cwrap("AVCodec_name", "string", ["number"]);
var AVCodec_sample_fmts = Module.AVCodec_sample_fmts = CAccessors.AVCodec_sample_fmts = Module.cwrap("AVCodec_sample_fmts", "number", ["number"]);
var AVCodec_sample_fmts_s = Module.AVCodec_sample_fmts_s = CAccessors.AVCodec_sample_fmts_s = Module.cwrap("AVCodec_sample_fmts_s", null, ["number", "number"]);
var AVCodec_sample_fmts_a = Module.AVCodec_sample_fmts_a = CAccessors.AVCodec_sample_fmts_a = Module.cwrap("AVCodec_sample_fmts_a", "number", ["number", "number"]);
var AVCodec_sample_fmts_a_s = Module.AVCodec_sample_fmts_a_s = CAccessors.AVCodec_sample_fmts_a_s = Module.cwrap("AVCodec_sample_fmts_a_s", null, ["number", "number", "number"]);
var AVCodec_supported_samplerates = Module.AVCodec_supported_samplerates = CAccessors.AVCodec_supported_samplerates = Module.cwrap("AVCodec_supported_samplerates", "number", ["number"]);
var AVCodec_supported_samplerates_s = Module.AVCodec_supported_samplerates_s = CAccessors.AVCodec_supported_samplerates_s = Module.cwrap("AVCodec_supported_samplerates_s", null, ["number", "number"]);
var AVCodec_supported_samplerates_a = Module.AVCodec_supported_samplerates_a = CAccessors.AVCodec_supported_samplerates_a = Module.cwrap("AVCodec_supported_samplerates_a", "number", ["number", "number"]);
var AVCodec_supported_samplerates_a_s = Module.AVCodec_supported_samplerates_a_s = CAccessors.AVCodec_supported_samplerates_a_s = Module.cwrap("AVCodec_supported_samplerates_a_s", null, ["number", "number", "number"]);
var AVCodec_type = Module.AVCodec_type = CAccessors.AVCodec_type = Module.cwrap("AVCodec_type", "number", ["number"]);
var AVCodec_type_s = Module.AVCodec_type_s = CAccessors.AVCodec_type_s = Module.cwrap("AVCodec_type_s", null, ["number", "number"]);
var AVCodecContext_codec_id = Module.AVCodecContext_codec_id = CAccessors.AVCodecContext_codec_id = Module.cwrap("AVCodecContext_codec_id", "number", ["number"]);
var AVCodecContext_codec_id_s = Module.AVCodecContext_codec_id_s = CAccessors.AVCodecContext_codec_id_s = Module.cwrap("AVCodecContext_codec_id_s", null, ["number", "number"]);
var AVCodecContext_codec_type = Module.AVCodecContext_codec_type = CAccessors.AVCodecContext_codec_type = Module.cwrap("AVCodecContext_codec_type", "number", ["number"]);
var AVCodecContext_codec_type_s = Module.AVCodecContext_codec_type_s = CAccessors.AVCodecContext_codec_type_s = Module.cwrap("AVCodecContext_codec_type_s", null, ["number", "number"]);
var AVCodecContext_bit_rate = Module.AVCodecContext_bit_rate = CAccessors.AVCodecContext_bit_rate = Module.cwrap("AVCodecContext_bit_rate", "number", ["number"]);
var AVCodecContext_bit_rate_s = Module.AVCodecContext_bit_rate_s = CAccessors.AVCodecContext_bit_rate_s = Module.cwrap("AVCodecContext_bit_rate_s", null, ["number", "number"]);
var AVCodecContext_bit_ratehi = Module.AVCodecContext_bit_ratehi = CAccessors.AVCodecContext_bit_ratehi = Module.cwrap("AVCodecContext_bit_ratehi", "number", ["number"]);
var AVCodecContext_bit_ratehi_s = Module.AVCodecContext_bit_ratehi_s = CAccessors.AVCodecContext_bit_ratehi_s = Module.cwrap("AVCodecContext_bit_ratehi_s", null, ["number", "number"]);
var AVCodecContext_channel_layout = Module.AVCodecContext_channel_layout = CAccessors.AVCodecContext_channel_layout = Module.cwrap("AVCodecContext_channel_layout", "number", ["number"]);
var AVCodecContext_channel_layout_s = Module.AVCodecContext_channel_layout_s = CAccessors.AVCodecContext_channel_layout_s = Module.cwrap("AVCodecContext_channel_layout_s", null, ["number", "number"]);
var AVCodecContext_channel_layouthi = Module.AVCodecContext_channel_layouthi = CAccessors.AVCodecContext_channel_layouthi = Module.cwrap("AVCodecContext_channel_layouthi", "number", ["number"]);
var AVCodecContext_channel_layouthi_s = Module.AVCodecContext_channel_layouthi_s = CAccessors.AVCodecContext_channel_layouthi_s = Module.cwrap("AVCodecContext_channel_layouthi_s", null, ["number", "number"]);
var AVCodecContext_channels = Module.AVCodecContext_channels = CAccessors.AVCodecContext_channels = Module.cwrap("AVCodecContext_channels", "number", ["number"]);
var AVCodecContext_channels_s = Module.AVCodecContext_channels_s = CAccessors.AVCodecContext_channels_s = Module.cwrap("AVCodecContext_channels_s", null, ["number", "number"]);
var AVCodecContext_channel_layoutmask = Module.AVCodecContext_channel_layoutmask = CAccessors.AVCodecContext_channel_layoutmask = Module.cwrap("AVCodecContext_channel_layoutmask", "number", ["number"]);
var AVCodecContext_channel_layoutmask_s = Module.AVCodecContext_channel_layoutmask_s = CAccessors.AVCodecContext_channel_layoutmask_s = Module.cwrap("AVCodecContext_channel_layoutmask_s", null, ["number", "number"]);
var AVCodecContext_ch_layout_nb_channels = Module.AVCodecContext_ch_layout_nb_channels = CAccessors.AVCodecContext_ch_layout_nb_channels = Module.cwrap("AVCodecContext_ch_layout_nb_channels", "number", ["number"]);
var AVCodecContext_ch_layout_nb_channels_s = Module.AVCodecContext_ch_layout_nb_channels_s = CAccessors.AVCodecContext_ch_layout_nb_channels_s = Module.cwrap("AVCodecContext_ch_layout_nb_channels_s", null, ["number", "number"]);
var AVCodecContext_extradata = Module.AVCodecContext_extradata = CAccessors.AVCodecContext_extradata = Module.cwrap("AVCodecContext_extradata", "number", ["number"]);
var AVCodecContext_extradata_s = Module.AVCodecContext_extradata_s = CAccessors.AVCodecContext_extradata_s = Module.cwrap("AVCodecContext_extradata_s", null, ["number", "number"]);
var AVCodecContext_extradata_size = Module.AVCodecContext_extradata_size = CAccessors.AVCodecContext_extradata_size = Module.cwrap("AVCodecContext_extradata_size", "number", ["number"]);
var AVCodecContext_extradata_size_s = Module.AVCodecContext_extradata_size_s = CAccessors.AVCodecContext_extradata_size_s = Module.cwrap("AVCodecContext_extradata_size_s", null, ["number", "number"]);
var AVCodecContext_frame_size = Module.AVCodecContext_frame_size = CAccessors.AVCodecContext_frame_size = Module.cwrap("AVCodecContext_frame_size", "number", ["number"]);
var AVCodecContext_frame_size_s = Module.AVCodecContext_frame_size_s = CAccessors.AVCodecContext_frame_size_s = Module.cwrap("AVCodecContext_frame_size_s", null, ["number", "number"]);
var AVCodecContext_framerate_num = Module.AVCodecContext_framerate_num = CAccessors.AVCodecContext_framerate_num = Module.cwrap("AVCodecContext_framerate_num", "number", ["number"]);
var AVCodecContext_framerate_num_s = Module.AVCodecContext_framerate_num_s = CAccessors.AVCodecContext_framerate_num_s = Module.cwrap("AVCodecContext_framerate_num_s", null, ["number", "number"]);
var AVCodecContext_framerate_den = Module.AVCodecContext_framerate_den = CAccessors.AVCodecContext_framerate_den = Module.cwrap("AVCodecContext_framerate_den", "number", ["number"]);
var AVCodecContext_framerate_den_s = Module.AVCodecContext_framerate_den_s = CAccessors.AVCodecContext_framerate_den_s = Module.cwrap("AVCodecContext_framerate_den_s", null, ["number", "number"]);
var AVCodecContext_framerate_s = Module.AVCodecContext_framerate_s = CAccessors.AVCodecContext_framerate_s = Module.cwrap("AVCodecContext_framerate_s", null, ["number", "number", "number"]);
var AVCodecContext_gop_size = Module.AVCodecContext_gop_size = CAccessors.AVCodecContext_gop_size = Module.cwrap("AVCodecContext_gop_size", "number", ["number"]);
var AVCodecContext_gop_size_s = Module.AVCodecContext_gop_size_s = CAccessors.AVCodecContext_gop_size_s = Module.cwrap("AVCodecContext_gop_size_s", null, ["number", "number"]);
var AVCodecContext_height = Module.AVCodecContext_height = CAccessors.AVCodecContext_height = Module.cwrap("AVCodecContext_height", "number", ["number"]);
var AVCodecContext_height_s = Module.AVCodecContext_height_s = CAccessors.AVCodecContext_height_s = Module.cwrap("AVCodecContext_height_s", null, ["number", "number"]);
var AVCodecContext_keyint_min = Module.AVCodecContext_keyint_min = CAccessors.AVCodecContext_keyint_min = Module.cwrap("AVCodecContext_keyint_min", "number", ["number"]);
var AVCodecContext_keyint_min_s = Module.AVCodecContext_keyint_min_s = CAccessors.AVCodecContext_keyint_min_s = Module.cwrap("AVCodecContext_keyint_min_s", null, ["number", "number"]);
var AVCodecContext_level = Module.AVCodecContext_level = CAccessors.AVCodecContext_level = Module.cwrap("AVCodecContext_level", "number", ["number"]);
var AVCodecContext_level_s = Module.AVCodecContext_level_s = CAccessors.AVCodecContext_level_s = Module.cwrap("AVCodecContext_level_s", null, ["number", "number"]);
var AVCodecContext_max_b_frames = Module.AVCodecContext_max_b_frames = CAccessors.AVCodecContext_max_b_frames = Module.cwrap("AVCodecContext_max_b_frames", "number", ["number"]);
var AVCodecContext_max_b_frames_s = Module.AVCodecContext_max_b_frames_s = CAccessors.AVCodecContext_max_b_frames_s = Module.cwrap("AVCodecContext_max_b_frames_s", null, ["number", "number"]);
var AVCodecContext_pix_fmt = Module.AVCodecContext_pix_fmt = CAccessors.AVCodecContext_pix_fmt = Module.cwrap("AVCodecContext_pix_fmt", "number", ["number"]);
var AVCodecContext_pix_fmt_s = Module.AVCodecContext_pix_fmt_s = CAccessors.AVCodecContext_pix_fmt_s = Module.cwrap("AVCodecContext_pix_fmt_s", null, ["number", "number"]);
var AVCodecContext_profile = Module.AVCodecContext_profile = CAccessors.AVCodecContext_profile = Module.cwrap("AVCodecContext_profile", "number", ["number"]);
var AVCodecContext_profile_s = Module.AVCodecContext_profile_s = CAccessors.AVCodecContext_profile_s = Module.cwrap("AVCodecContext_profile_s", null, ["number", "number"]);
var AVCodecContext_rc_max_rate = Module.AVCodecContext_rc_max_rate = CAccessors.AVCodecContext_rc_max_rate = Module.cwrap("AVCodecContext_rc_max_rate", "number", ["number"]);
var AVCodecContext_rc_max_rate_s = Module.AVCodecContext_rc_max_rate_s = CAccessors.AVCodecContext_rc_max_rate_s = Module.cwrap("AVCodecContext_rc_max_rate_s", null, ["number", "number"]);
var AVCodecContext_rc_max_ratehi = Module.AVCodecContext_rc_max_ratehi = CAccessors.AVCodecContext_rc_max_ratehi = Module.cwrap("AVCodecContext_rc_max_ratehi", "number", ["number"]);
var AVCodecContext_rc_max_ratehi_s = Module.AVCodecContext_rc_max_ratehi_s = CAccessors.AVCodecContext_rc_max_ratehi_s = Module.cwrap("AVCodecContext_rc_max_ratehi_s", null, ["number", "number"]);
var AVCodecContext_rc_min_rate = Module.AVCodecContext_rc_min_rate = CAccessors.AVCodecContext_rc_min_rate = Module.cwrap("AVCodecContext_rc_min_rate", "number", ["number"]);
var AVCodecContext_rc_min_rate_s = Module.AVCodecContext_rc_min_rate_s = CAccessors.AVCodecContext_rc_min_rate_s = Module.cwrap("AVCodecContext_rc_min_rate_s", null, ["number", "number"]);
var AVCodecContext_rc_min_ratehi = Module.AVCodecContext_rc_min_ratehi = CAccessors.AVCodecContext_rc_min_ratehi = Module.cwrap("AVCodecContext_rc_min_ratehi", "number", ["number"]);
var AVCodecContext_rc_min_ratehi_s = Module.AVCodecContext_rc_min_ratehi_s = CAccessors.AVCodecContext_rc_min_ratehi_s = Module.cwrap("AVCodecContext_rc_min_ratehi_s", null, ["number", "number"]);
var AVCodecContext_sample_aspect_ratio_num = Module.AVCodecContext_sample_aspect_ratio_num = CAccessors.AVCodecContext_sample_aspect_ratio_num = Module.cwrap("AVCodecContext_sample_aspect_ratio_num", "number", ["number"]);
var AVCodecContext_sample_aspect_ratio_num_s = Module.AVCodecContext_sample_aspect_ratio_num_s = CAccessors.AVCodecContext_sample_aspect_ratio_num_s = Module.cwrap("AVCodecContext_sample_aspect_ratio_num_s", null, ["number", "number"]);
var AVCodecContext_sample_aspect_ratio_den = Module.AVCodecContext_sample_aspect_ratio_den = CAccessors.AVCodecContext_sample_aspect_ratio_den = Module.cwrap("AVCodecContext_sample_aspect_ratio_den", "number", ["number"]);
var AVCodecContext_sample_aspect_ratio_den_s = Module.AVCodecContext_sample_aspect_ratio_den_s = CAccessors.AVCodecContext_sample_aspect_ratio_den_s = Module.cwrap("AVCodecContext_sample_aspect_ratio_den_s", null, ["number", "number"]);
var AVCodecContext_sample_aspect_ratio_s = Module.AVCodecContext_sample_aspect_ratio_s = CAccessors.AVCodecContext_sample_aspect_ratio_s = Module.cwrap("AVCodecContext_sample_aspect_ratio_s", null, ["number", "number", "number"]);
var AVCodecContext_sample_fmt = Module.AVCodecContext_sample_fmt = CAccessors.AVCodecContext_sample_fmt = Module.cwrap("AVCodecContext_sample_fmt", "number", ["number"]);
var AVCodecContext_sample_fmt_s = Module.AVCodecContext_sample_fmt_s = CAccessors.AVCodecContext_sample_fmt_s = Module.cwrap("AVCodecContext_sample_fmt_s", null, ["number", "number"]);
var AVCodecContext_sample_rate = Module.AVCodecContext_sample_rate = CAccessors.AVCodecContext_sample_rate = Module.cwrap("AVCodecContext_sample_rate", "number", ["number"]);
var AVCodecContext_sample_rate_s = Module.AVCodecContext_sample_rate_s = CAccessors.AVCodecContext_sample_rate_s = Module.cwrap("AVCodecContext_sample_rate_s", null, ["number", "number"]);
var AVCodecContext_time_base_num = Module.AVCodecContext_time_base_num = CAccessors.AVCodecContext_time_base_num = Module.cwrap("AVCodecContext_time_base_num", "number", ["number"]);
var AVCodecContext_time_base_num_s = Module.AVCodecContext_time_base_num_s = CAccessors.AVCodecContext_time_base_num_s = Module.cwrap("AVCodecContext_time_base_num_s", null, ["number", "number"]);
var AVCodecContext_time_base_den = Module.AVCodecContext_time_base_den = CAccessors.AVCodecContext_time_base_den = Module.cwrap("AVCodecContext_time_base_den", "number", ["number"]);
var AVCodecContext_time_base_den_s = Module.AVCodecContext_time_base_den_s = CAccessors.AVCodecContext_time_base_den_s = Module.cwrap("AVCodecContext_time_base_den_s", null, ["number", "number"]);
var AVCodecContext_time_base_s = Module.AVCodecContext_time_base_s = CAccessors.AVCodecContext_time_base_s = Module.cwrap("AVCodecContext_time_base_s", null, ["number", "number", "number"]);
var AVCodecContext_qmax = Module.AVCodecContext_qmax = CAccessors.AVCodecContext_qmax = Module.cwrap("AVCodecContext_qmax", "number", ["number"]);
var AVCodecContext_qmax_s = Module.AVCodecContext_qmax_s = CAccessors.AVCodecContext_qmax_s = Module.cwrap("AVCodecContext_qmax_s", null, ["number", "number"]);
var AVCodecContext_qmin = Module.AVCodecContext_qmin = CAccessors.AVCodecContext_qmin = Module.cwrap("AVCodecContext_qmin", "number", ["number"]);
var AVCodecContext_qmin_s = Module.AVCodecContext_qmin_s = CAccessors.AVCodecContext_qmin_s = Module.cwrap("AVCodecContext_qmin_s", null, ["number", "number"]);
var AVCodecContext_width = Module.AVCodecContext_width = CAccessors.AVCodecContext_width = Module.cwrap("AVCodecContext_width", "number", ["number"]);
var AVCodecContext_width_s = Module.AVCodecContext_width_s = CAccessors.AVCodecContext_width_s = Module.cwrap("AVCodecContext_width_s", null, ["number", "number"]);
var AVCodecDescriptor_id = Module.AVCodecDescriptor_id = CAccessors.AVCodecDescriptor_id = Module.cwrap("AVCodecDescriptor_id", "number", ["number"]);
var AVCodecDescriptor_id_s = Module.AVCodecDescriptor_id_s = CAccessors.AVCodecDescriptor_id_s = Module.cwrap("AVCodecDescriptor_id_s", null, ["number", "number"]);
var AVCodecDescriptor_long_name = Module.AVCodecDescriptor_long_name = CAccessors.AVCodecDescriptor_long_name = Module.cwrap("AVCodecDescriptor_long_name", "number", ["number"]);
var AVCodecDescriptor_long_name_s = Module.AVCodecDescriptor_long_name_s = CAccessors.AVCodecDescriptor_long_name_s = Module.cwrap("AVCodecDescriptor_long_name_s", null, ["number", "number"]);
var AVCodecDescriptor_mime_types_a = Module.AVCodecDescriptor_mime_types_a = CAccessors.AVCodecDescriptor_mime_types_a = Module.cwrap("AVCodecDescriptor_mime_types_a", "number", ["number", "number"]);
var AVCodecDescriptor_mime_types_a_s = Module.AVCodecDescriptor_mime_types_a_s = CAccessors.AVCodecDescriptor_mime_types_a_s = Module.cwrap("AVCodecDescriptor_mime_types_a_s", null, ["number", "number", "number"]);
var AVCodecDescriptor_name = Module.AVCodecDescriptor_name = CAccessors.AVCodecDescriptor_name = Module.cwrap("AVCodecDescriptor_name", "number", ["number"]);
var AVCodecDescriptor_name_s = Module.AVCodecDescriptor_name_s = CAccessors.AVCodecDescriptor_name_s = Module.cwrap("AVCodecDescriptor_name_s", null, ["number", "number"]);
var AVCodecDescriptor_props = Module.AVCodecDescriptor_props = CAccessors.AVCodecDescriptor_props = Module.cwrap("AVCodecDescriptor_props", "number", ["number"]);
var AVCodecDescriptor_props_s = Module.AVCodecDescriptor_props_s = CAccessors.AVCodecDescriptor_props_s = Module.cwrap("AVCodecDescriptor_props_s", null, ["number", "number"]);
var AVCodecDescriptor_type = Module.AVCodecDescriptor_type = CAccessors.AVCodecDescriptor_type = Module.cwrap("AVCodecDescriptor_type", "number", ["number"]);
var AVCodecDescriptor_type_s = Module.AVCodecDescriptor_type_s = CAccessors.AVCodecDescriptor_type_s = Module.cwrap("AVCodecDescriptor_type_s", null, ["number", "number"]);
var AVCodecParameters_bit_rate = Module.AVCodecParameters_bit_rate = CAccessors.AVCodecParameters_bit_rate = Module.cwrap("AVCodecParameters_bit_rate", "number", ["number"]);
var AVCodecParameters_bit_rate_s = Module.AVCodecParameters_bit_rate_s = CAccessors.AVCodecParameters_bit_rate_s = Module.cwrap("AVCodecParameters_bit_rate_s", null, ["number", "number"]);
var AVCodecParameters_channel_layoutmask = Module.AVCodecParameters_channel_layoutmask = CAccessors.AVCodecParameters_channel_layoutmask = Module.cwrap("AVCodecParameters_channel_layoutmask", "number", ["number"]);
var AVCodecParameters_channel_layoutmask_s = Module.AVCodecParameters_channel_layoutmask_s = CAccessors.AVCodecParameters_channel_layoutmask_s = Module.cwrap("AVCodecParameters_channel_layoutmask_s", null, ["number", "number"]);
var AVCodecParameters_channels = Module.AVCodecParameters_channels = CAccessors.AVCodecParameters_channels = Module.cwrap("AVCodecParameters_channels", "number", ["number"]);
var AVCodecParameters_channels_s = Module.AVCodecParameters_channels_s = CAccessors.AVCodecParameters_channels_s = Module.cwrap("AVCodecParameters_channels_s", null, ["number", "number"]);
var AVCodecParameters_ch_layout_nb_channels = Module.AVCodecParameters_ch_layout_nb_channels = CAccessors.AVCodecParameters_ch_layout_nb_channels = Module.cwrap("AVCodecParameters_ch_layout_nb_channels", "number", ["number"]);
var AVCodecParameters_ch_layout_nb_channels_s = Module.AVCodecParameters_ch_layout_nb_channels_s = CAccessors.AVCodecParameters_ch_layout_nb_channels_s = Module.cwrap("AVCodecParameters_ch_layout_nb_channels_s", null, ["number", "number"]);
var AVCodecParameters_chroma_location = Module.AVCodecParameters_chroma_location = CAccessors.AVCodecParameters_chroma_location = Module.cwrap("AVCodecParameters_chroma_location", "number", ["number"]);
var AVCodecParameters_chroma_location_s = Module.AVCodecParameters_chroma_location_s = CAccessors.AVCodecParameters_chroma_location_s = Module.cwrap("AVCodecParameters_chroma_location_s", null, ["number", "number"]);
var AVCodecParameters_codec_id = Module.AVCodecParameters_codec_id = CAccessors.AVCodecParameters_codec_id = Module.cwrap("AVCodecParameters_codec_id", "number", ["number"]);
var AVCodecParameters_codec_id_s = Module.AVCodecParameters_codec_id_s = CAccessors.AVCodecParameters_codec_id_s = Module.cwrap("AVCodecParameters_codec_id_s", null, ["number", "number"]);
var AVCodecParameters_codec_tag = Module.AVCodecParameters_codec_tag = CAccessors.AVCodecParameters_codec_tag = Module.cwrap("AVCodecParameters_codec_tag", "number", ["number"]);
var AVCodecParameters_codec_tag_s = Module.AVCodecParameters_codec_tag_s = CAccessors.AVCodecParameters_codec_tag_s = Module.cwrap("AVCodecParameters_codec_tag_s", null, ["number", "number"]);
var AVCodecParameters_codec_type = Module.AVCodecParameters_codec_type = CAccessors.AVCodecParameters_codec_type = Module.cwrap("AVCodecParameters_codec_type", "number", ["number"]);
var AVCodecParameters_codec_type_s = Module.AVCodecParameters_codec_type_s = CAccessors.AVCodecParameters_codec_type_s = Module.cwrap("AVCodecParameters_codec_type_s", null, ["number", "number"]);
var AVCodecParameters_color_primaries = Module.AVCodecParameters_color_primaries = CAccessors.AVCodecParameters_color_primaries = Module.cwrap("AVCodecParameters_color_primaries", "number", ["number"]);
var AVCodecParameters_color_primaries_s = Module.AVCodecParameters_color_primaries_s = CAccessors.AVCodecParameters_color_primaries_s = Module.cwrap("AVCodecParameters_color_primaries_s", null, ["number", "number"]);
var AVCodecParameters_color_range = Module.AVCodecParameters_color_range = CAccessors.AVCodecParameters_color_range = Module.cwrap("AVCodecParameters_color_range", "number", ["number"]);
var AVCodecParameters_color_range_s = Module.AVCodecParameters_color_range_s = CAccessors.AVCodecParameters_color_range_s = Module.cwrap("AVCodecParameters_color_range_s", null, ["number", "number"]);
var AVCodecParameters_color_space = Module.AVCodecParameters_color_space = CAccessors.AVCodecParameters_color_space = Module.cwrap("AVCodecParameters_color_space", "number", ["number"]);
var AVCodecParameters_color_space_s = Module.AVCodecParameters_color_space_s = CAccessors.AVCodecParameters_color_space_s = Module.cwrap("AVCodecParameters_color_space_s", null, ["number", "number"]);
var AVCodecParameters_color_trc = Module.AVCodecParameters_color_trc = CAccessors.AVCodecParameters_color_trc = Module.cwrap("AVCodecParameters_color_trc", "number", ["number"]);
var AVCodecParameters_color_trc_s = Module.AVCodecParameters_color_trc_s = CAccessors.AVCodecParameters_color_trc_s = Module.cwrap("AVCodecParameters_color_trc_s", null, ["number", "number"]);
var AVCodecParameters_extradata = Module.AVCodecParameters_extradata = CAccessors.AVCodecParameters_extradata = Module.cwrap("AVCodecParameters_extradata", "number", ["number"]);
var AVCodecParameters_extradata_s = Module.AVCodecParameters_extradata_s = CAccessors.AVCodecParameters_extradata_s = Module.cwrap("AVCodecParameters_extradata_s", null, ["number", "number"]);
var AVCodecParameters_extradata_size = Module.AVCodecParameters_extradata_size = CAccessors.AVCodecParameters_extradata_size = Module.cwrap("AVCodecParameters_extradata_size", "number", ["number"]);
var AVCodecParameters_extradata_size_s = Module.AVCodecParameters_extradata_size_s = CAccessors.AVCodecParameters_extradata_size_s = Module.cwrap("AVCodecParameters_extradata_size_s", null, ["number", "number"]);
var AVCodecParameters_format = Module.AVCodecParameters_format = CAccessors.AVCodecParameters_format = Module.cwrap("AVCodecParameters_format", "number", ["number"]);
var AVCodecParameters_format_s = Module.AVCodecParameters_format_s = CAccessors.AVCodecParameters_format_s = Module.cwrap("AVCodecParameters_format_s", null, ["number", "number"]);
var AVCodecParameters_framerate_num = Module.AVCodecParameters_framerate_num = CAccessors.AVCodecParameters_framerate_num = Module.cwrap("AVCodecParameters_framerate_num", "number", ["number"]);
var AVCodecParameters_framerate_num_s = Module.AVCodecParameters_framerate_num_s = CAccessors.AVCodecParameters_framerate_num_s = Module.cwrap("AVCodecParameters_framerate_num_s", null, ["number", "number"]);
var AVCodecParameters_framerate_den = Module.AVCodecParameters_framerate_den = CAccessors.AVCodecParameters_framerate_den = Module.cwrap("AVCodecParameters_framerate_den", "number", ["number"]);
var AVCodecParameters_framerate_den_s = Module.AVCodecParameters_framerate_den_s = CAccessors.AVCodecParameters_framerate_den_s = Module.cwrap("AVCodecParameters_framerate_den_s", null, ["number", "number"]);
var AVCodecParameters_framerate_s = Module.AVCodecParameters_framerate_s = CAccessors.AVCodecParameters_framerate_s = Module.cwrap("AVCodecParameters_framerate_s", null, ["number", "number", "number"]);
var AVCodecParameters_height = Module.AVCodecParameters_height = CAccessors.AVCodecParameters_height = Module.cwrap("AVCodecParameters_height", "number", ["number"]);
var AVCodecParameters_height_s = Module.AVCodecParameters_height_s = CAccessors.AVCodecParameters_height_s = Module.cwrap("AVCodecParameters_height_s", null, ["number", "number"]);
var AVCodecParameters_level = Module.AVCodecParameters_level = CAccessors.AVCodecParameters_level = Module.cwrap("AVCodecParameters_level", "number", ["number"]);
var AVCodecParameters_level_s = Module.AVCodecParameters_level_s = CAccessors.AVCodecParameters_level_s = Module.cwrap("AVCodecParameters_level_s", null, ["number", "number"]);
var AVCodecParameters_profile = Module.AVCodecParameters_profile = CAccessors.AVCodecParameters_profile = Module.cwrap("AVCodecParameters_profile", "number", ["number"]);
var AVCodecParameters_profile_s = Module.AVCodecParameters_profile_s = CAccessors.AVCodecParameters_profile_s = Module.cwrap("AVCodecParameters_profile_s", null, ["number", "number"]);
var AVCodecParameters_sample_rate = Module.AVCodecParameters_sample_rate = CAccessors.AVCodecParameters_sample_rate = Module.cwrap("AVCodecParameters_sample_rate", "number", ["number"]);
var AVCodecParameters_sample_rate_s = Module.AVCodecParameters_sample_rate_s = CAccessors.AVCodecParameters_sample_rate_s = Module.cwrap("AVCodecParameters_sample_rate_s", null, ["number", "number"]);
var AVCodecParameters_width = Module.AVCodecParameters_width = CAccessors.AVCodecParameters_width = Module.cwrap("AVCodecParameters_width", "number", ["number"]);
var AVCodecParameters_width_s = Module.AVCodecParameters_width_s = CAccessors.AVCodecParameters_width_s = Module.cwrap("AVCodecParameters_width_s", null, ["number", "number"]);
var AVPacket_data = Module.AVPacket_data = CAccessors.AVPacket_data = Module.cwrap("AVPacket_data", "number", ["number"]);
var AVPacket_data_s = Module.AVPacket_data_s = CAccessors.AVPacket_data_s = Module.cwrap("AVPacket_data_s", null, ["number", "number"]);
var AVPacket_dts = Module.AVPacket_dts = CAccessors.AVPacket_dts = Module.cwrap("AVPacket_dts", "number", ["number"]);
var AVPacket_dts_s = Module.AVPacket_dts_s = CAccessors.AVPacket_dts_s = Module.cwrap("AVPacket_dts_s", null, ["number", "number"]);
var AVPacket_dtshi = Module.AVPacket_dtshi = CAccessors.AVPacket_dtshi = Module.cwrap("AVPacket_dtshi", "number", ["number"]);
var AVPacket_dtshi_s = Module.AVPacket_dtshi_s = CAccessors.AVPacket_dtshi_s = Module.cwrap("AVPacket_dtshi_s", null, ["number", "number"]);
var AVPacket_duration = Module.AVPacket_duration = CAccessors.AVPacket_duration = Module.cwrap("AVPacket_duration", "number", ["number"]);
var AVPacket_duration_s = Module.AVPacket_duration_s = CAccessors.AVPacket_duration_s = Module.cwrap("AVPacket_duration_s", null, ["number", "number"]);
var AVPacket_durationhi = Module.AVPacket_durationhi = CAccessors.AVPacket_durationhi = Module.cwrap("AVPacket_durationhi", "number", ["number"]);
var AVPacket_durationhi_s = Module.AVPacket_durationhi_s = CAccessors.AVPacket_durationhi_s = Module.cwrap("AVPacket_durationhi_s", null, ["number", "number"]);
var AVPacket_flags = Module.AVPacket_flags = CAccessors.AVPacket_flags = Module.cwrap("AVPacket_flags", "number", ["number"]);
var AVPacket_flags_s = Module.AVPacket_flags_s = CAccessors.AVPacket_flags_s = Module.cwrap("AVPacket_flags_s", null, ["number", "number"]);
var AVPacket_pos = Module.AVPacket_pos = CAccessors.AVPacket_pos = Module.cwrap("AVPacket_pos", "number", ["number"]);
var AVPacket_pos_s = Module.AVPacket_pos_s = CAccessors.AVPacket_pos_s = Module.cwrap("AVPacket_pos_s", null, ["number", "number"]);
var AVPacket_poshi = Module.AVPacket_poshi = CAccessors.AVPacket_poshi = Module.cwrap("AVPacket_poshi", "number", ["number"]);
var AVPacket_poshi_s = Module.AVPacket_poshi_s = CAccessors.AVPacket_poshi_s = Module.cwrap("AVPacket_poshi_s", null, ["number", "number"]);
var AVPacket_pts = Module.AVPacket_pts = CAccessors.AVPacket_pts = Module.cwrap("AVPacket_pts", "number", ["number"]);
var AVPacket_pts_s = Module.AVPacket_pts_s = CAccessors.AVPacket_pts_s = Module.cwrap("AVPacket_pts_s", null, ["number", "number"]);
var AVPacket_ptshi = Module.AVPacket_ptshi = CAccessors.AVPacket_ptshi = Module.cwrap("AVPacket_ptshi", "number", ["number"]);
var AVPacket_ptshi_s = Module.AVPacket_ptshi_s = CAccessors.AVPacket_ptshi_s = Module.cwrap("AVPacket_ptshi_s", null, ["number", "number"]);
var AVPacket_side_data = Module.AVPacket_side_data = CAccessors.AVPacket_side_data = Module.cwrap("AVPacket_side_data", "number", ["number"]);
var AVPacket_side_data_s = Module.AVPacket_side_data_s = CAccessors.AVPacket_side_data_s = Module.cwrap("AVPacket_side_data_s", null, ["number", "number"]);
var AVPacket_side_data_elems = Module.AVPacket_side_data_elems = CAccessors.AVPacket_side_data_elems = Module.cwrap("AVPacket_side_data_elems", "number", ["number"]);
var AVPacket_side_data_elems_s = Module.AVPacket_side_data_elems_s = CAccessors.AVPacket_side_data_elems_s = Module.cwrap("AVPacket_side_data_elems_s", null, ["number", "number"]);
var AVPacket_size = Module.AVPacket_size = CAccessors.AVPacket_size = Module.cwrap("AVPacket_size", "number", ["number"]);
var AVPacket_size_s = Module.AVPacket_size_s = CAccessors.AVPacket_size_s = Module.cwrap("AVPacket_size_s", null, ["number", "number"]);
var AVPacket_stream_index = Module.AVPacket_stream_index = CAccessors.AVPacket_stream_index = Module.cwrap("AVPacket_stream_index", "number", ["number"]);
var AVPacket_stream_index_s = Module.AVPacket_stream_index_s = CAccessors.AVPacket_stream_index_s = Module.cwrap("AVPacket_stream_index_s", null, ["number", "number"]);
var AVPacket_time_base_num = Module.AVPacket_time_base_num = CAccessors.AVPacket_time_base_num = Module.cwrap("AVPacket_time_base_num", "number", ["number"]);
var AVPacket_time_base_num_s = Module.AVPacket_time_base_num_s = CAccessors.AVPacket_time_base_num_s = Module.cwrap("AVPacket_time_base_num_s", null, ["number", "number"]);
var AVPacket_time_base_den = Module.AVPacket_time_base_den = CAccessors.AVPacket_time_base_den = Module.cwrap("AVPacket_time_base_den", "number", ["number"]);
var AVPacket_time_base_den_s = Module.AVPacket_time_base_den_s = CAccessors.AVPacket_time_base_den_s = Module.cwrap("AVPacket_time_base_den_s", null, ["number", "number"]);
var AVPacket_time_base_s = Module.AVPacket_time_base_s = CAccessors.AVPacket_time_base_s = Module.cwrap("AVPacket_time_base_s", null, ["number", "number", "number"]);
var AVFormatContext_duration = Module.AVFormatContext_duration = CAccessors.AVFormatContext_duration = Module.cwrap("AVFormatContext_duration", "number", ["number"]);
var AVFormatContext_duration_s = Module.AVFormatContext_duration_s = CAccessors.AVFormatContext_duration_s = Module.cwrap("AVFormatContext_duration_s", null, ["number", "number"]);
var AVFormatContext_durationhi = Module.AVFormatContext_durationhi = CAccessors.AVFormatContext_durationhi = Module.cwrap("AVFormatContext_durationhi", "number", ["number"]);
var AVFormatContext_durationhi_s = Module.AVFormatContext_durationhi_s = CAccessors.AVFormatContext_durationhi_s = Module.cwrap("AVFormatContext_durationhi_s", null, ["number", "number"]);
var AVFormatContext_flags = Module.AVFormatContext_flags = CAccessors.AVFormatContext_flags = Module.cwrap("AVFormatContext_flags", "number", ["number"]);
var AVFormatContext_flags_s = Module.AVFormatContext_flags_s = CAccessors.AVFormatContext_flags_s = Module.cwrap("AVFormatContext_flags_s", null, ["number", "number"]);
var AVFormatContext_nb_streams = Module.AVFormatContext_nb_streams = CAccessors.AVFormatContext_nb_streams = Module.cwrap("AVFormatContext_nb_streams", "number", ["number"]);
var AVFormatContext_nb_streams_s = Module.AVFormatContext_nb_streams_s = CAccessors.AVFormatContext_nb_streams_s = Module.cwrap("AVFormatContext_nb_streams_s", null, ["number", "number"]);
var AVFormatContext_oformat = Module.AVFormatContext_oformat = CAccessors.AVFormatContext_oformat = Module.cwrap("AVFormatContext_oformat", "number", ["number"]);
var AVFormatContext_oformat_s = Module.AVFormatContext_oformat_s = CAccessors.AVFormatContext_oformat_s = Module.cwrap("AVFormatContext_oformat_s", null, ["number", "number"]);
var AVFormatContext_pb = Module.AVFormatContext_pb = CAccessors.AVFormatContext_pb = Module.cwrap("AVFormatContext_pb", "number", ["number"]);
var AVFormatContext_pb_s = Module.AVFormatContext_pb_s = CAccessors.AVFormatContext_pb_s = Module.cwrap("AVFormatContext_pb_s", null, ["number", "number"]);
var AVFormatContext_start_time = Module.AVFormatContext_start_time = CAccessors.AVFormatContext_start_time = Module.cwrap("AVFormatContext_start_time", "number", ["number"]);
var AVFormatContext_start_time_s = Module.AVFormatContext_start_time_s = CAccessors.AVFormatContext_start_time_s = Module.cwrap("AVFormatContext_start_time_s", null, ["number", "number"]);
var AVFormatContext_start_timehi = Module.AVFormatContext_start_timehi = CAccessors.AVFormatContext_start_timehi = Module.cwrap("AVFormatContext_start_timehi", "number", ["number"]);
var AVFormatContext_start_timehi_s = Module.AVFormatContext_start_timehi_s = CAccessors.AVFormatContext_start_timehi_s = Module.cwrap("AVFormatContext_start_timehi_s", null, ["number", "number"]);
var AVFormatContext_streams_a = Module.AVFormatContext_streams_a = CAccessors.AVFormatContext_streams_a = Module.cwrap("AVFormatContext_streams_a", "number", ["number", "number"]);
var AVFormatContext_streams_a_s = Module.AVFormatContext_streams_a_s = CAccessors.AVFormatContext_streams_a_s = Module.cwrap("AVFormatContext_streams_a_s", null, ["number", "number", "number"]);
var AVStream_codecpar = Module.AVStream_codecpar = CAccessors.AVStream_codecpar = Module.cwrap("AVStream_codecpar", "number", ["number"]);
var AVStream_codecpar_s = Module.AVStream_codecpar_s = CAccessors.AVStream_codecpar_s = Module.cwrap("AVStream_codecpar_s", null, ["number", "number"]);
var AVStream_discard = Module.AVStream_discard = CAccessors.AVStream_discard = Module.cwrap("AVStream_discard", "number", ["number"]);
var AVStream_discard_s = Module.AVStream_discard_s = CAccessors.AVStream_discard_s = Module.cwrap("AVStream_discard_s", null, ["number", "number"]);
var AVStream_duration = Module.AVStream_duration = CAccessors.AVStream_duration = Module.cwrap("AVStream_duration", "number", ["number"]);
var AVStream_duration_s = Module.AVStream_duration_s = CAccessors.AVStream_duration_s = Module.cwrap("AVStream_duration_s", null, ["number", "number"]);
var AVStream_durationhi = Module.AVStream_durationhi = CAccessors.AVStream_durationhi = Module.cwrap("AVStream_durationhi", "number", ["number"]);
var AVStream_durationhi_s = Module.AVStream_durationhi_s = CAccessors.AVStream_durationhi_s = Module.cwrap("AVStream_durationhi_s", null, ["number", "number"]);
var AVStream_time_base_num = Module.AVStream_time_base_num = CAccessors.AVStream_time_base_num = Module.cwrap("AVStream_time_base_num", "number", ["number"]);
var AVStream_time_base_num_s = Module.AVStream_time_base_num_s = CAccessors.AVStream_time_base_num_s = Module.cwrap("AVStream_time_base_num_s", null, ["number", "number"]);
var AVStream_time_base_den = Module.AVStream_time_base_den = CAccessors.AVStream_time_base_den = Module.cwrap("AVStream_time_base_den", "number", ["number"]);
var AVStream_time_base_den_s = Module.AVStream_time_base_den_s = CAccessors.AVStream_time_base_den_s = Module.cwrap("AVStream_time_base_den_s", null, ["number", "number"]);
var AVStream_time_base_s = Module.AVStream_time_base_s = CAccessors.AVStream_time_base_s = Module.cwrap("AVStream_time_base_s", null, ["number", "number", "number"]);
var AVFilterInOut_filter_ctx = Module.AVFilterInOut_filter_ctx = CAccessors.AVFilterInOut_filter_ctx = Module.cwrap("AVFilterInOut_filter_ctx", "number", ["number"]);
var AVFilterInOut_filter_ctx_s = Module.AVFilterInOut_filter_ctx_s = CAccessors.AVFilterInOut_filter_ctx_s = Module.cwrap("AVFilterInOut_filter_ctx_s", null, ["number", "number"]);
var AVFilterInOut_name = Module.AVFilterInOut_name = CAccessors.AVFilterInOut_name = Module.cwrap("AVFilterInOut_name", "number", ["number"]);
var AVFilterInOut_name_s = Module.AVFilterInOut_name_s = CAccessors.AVFilterInOut_name_s = Module.cwrap("AVFilterInOut_name_s", null, ["number", "number"]);
var AVFilterInOut_next = Module.AVFilterInOut_next = CAccessors.AVFilterInOut_next = Module.cwrap("AVFilterInOut_next", "number", ["number"]);
var AVFilterInOut_next_s = Module.AVFilterInOut_next_s = CAccessors.AVFilterInOut_next_s = Module.cwrap("AVFilterInOut_next_s", null, ["number", "number"]);
var AVFilterInOut_pad_idx = Module.AVFilterInOut_pad_idx = CAccessors.AVFilterInOut_pad_idx = Module.cwrap("AVFilterInOut_pad_idx", "number", ["number"]);
var AVFilterInOut_pad_idx_s = Module.AVFilterInOut_pad_idx_s = CAccessors.AVFilterInOut_pad_idx_s = Module.cwrap("AVFilterInOut_pad_idx_s", null, ["number", "number"]);
var av_frame_free_js = Module.av_frame_free_js = CAccessors.av_frame_free_js = function(p) { var p2 = malloc(4); if (p2 === 0) throw new Error("Could not malloc"); (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p; CAccessors.av_frame_free(p2); free(p2); };
var av_packet_free_js = Module.av_packet_free_js = CAccessors.av_packet_free_js = function(p) { var p2 = malloc(4); if (p2 === 0) throw new Error("Could not malloc"); (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p; CAccessors.av_packet_free(p2); free(p2); };
var avformat_close_input_js = Module.avformat_close_input_js = CAccessors.avformat_close_input_js = function(p) { var p2 = malloc(4); if (p2 === 0) throw new Error("Could not malloc"); (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p; CAccessors.avformat_close_input(p2); free(p2); };
var avcodec_free_context_js = Module.avcodec_free_context_js = CAccessors.avcodec_free_context_js = function(p) { var p2 = malloc(4); if (p2 === 0) throw new Error("Could not malloc"); (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p; CAccessors.avcodec_free_context(p2); free(p2); };
var avcodec_parameters_free_js = Module.avcodec_parameters_free_js = CAccessors.avcodec_parameters_free_js = function(p) { var p2 = malloc(4); if (p2 === 0) throw new Error("Could not malloc"); (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p; CAccessors.avcodec_parameters_free(p2); free(p2); };
var avfilter_graph_free_js = Module.avfilter_graph_free_js = CAccessors.avfilter_graph_free_js = function(p) { var p2 = malloc(4); if (p2 === 0) throw new Error("Could not malloc"); (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p; CAccessors.avfilter_graph_free(p2); free(p2); };
var avfilter_inout_free_js = Module.avfilter_inout_free_js = CAccessors.avfilter_inout_free_js = function(p) { var p2 = malloc(4); if (p2 === 0) throw new Error("Could not malloc"); (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p; CAccessors.avfilter_inout_free(p2); free(p2); };
var av_dict_free_js = Module.av_dict_free_js = CAccessors.av_dict_free_js = function(p) { var p2 = malloc(4); if (p2 === 0) throw new Error("Could not malloc"); (new Uint32Array(Module.HEAPU8.buffer, p2, 1))[0] = p; CAccessors.av_dict_free(p2); free(p2); };
var copyin_u8 = Module.copyin_u8 = CAccessors.copyin_u8 = function(ptr, arr) { var buf = new Uint8Array(Module.HEAPU8.buffer, ptr); buf.set(arr); };
var copyout_u8 = Module.copyout_u8 = CAccessors.copyout_u8 = function(ptr, len) { var ret = (new Uint8Array(Module.HEAPU8.buffer, ptr, len)).slice(0); ret.libavjsTransfer = [ret.buffer]; return ret; };
var copyin_s16 = Module.copyin_s16 = CAccessors.copyin_s16 = function(ptr, arr) { var buf = new Int16Array(Module.HEAPU8.buffer, ptr); buf.set(arr); };
var copyout_s16 = Module.copyout_s16 = CAccessors.copyout_s16 = function(ptr, len) { var ret = (new Int16Array(Module.HEAPU8.buffer, ptr, len)).slice(0); ret.libavjsTransfer = [ret.buffer]; return ret; };
var copyin_s32 = Module.copyin_s32 = CAccessors.copyin_s32 = function(ptr, arr) { var buf = new Int32Array(Module.HEAPU8.buffer, ptr); buf.set(arr); };
var copyout_s32 = Module.copyout_s32 = CAccessors.copyout_s32 = function(ptr, len) { var ret = (new Int32Array(Module.HEAPU8.buffer, ptr, len)).slice(0); ret.libavjsTransfer = [ret.buffer]; return ret; };
var copyin_f32 = Module.copyin_f32 = CAccessors.copyin_f32 = function(ptr, arr) { var buf = new Float32Array(Module.HEAPU8.buffer, ptr); buf.set(arr); };
var copyout_f32 = Module.copyout_f32 = CAccessors.copyout_f32 = function(ptr, len) { var ret = (new Float32Array(Module.HEAPU8.buffer, ptr, len)).slice(0); ret.libavjsTransfer = [ret.buffer]; return ret; };


// Filesystem
function fsBinding(of) {
    Module[of] = function() {
        try {
            return FS[of].apply(FS, arguments);
        } catch (ex) {
            if (ex && ex.name === "ErrnoError") {
                // Give a more useful error
                ex.message = strerror(ex.errno);
                if (typeof arguments[0] === "string")
                    ex.message = arguments[0] + ": " + ex.message;
            }
            throw ex;
        }
    };
}

var readerDev = FS.makedev(44, 0);
FS.registerDevice(readerDev, readerCallbacks);
Module.readBuffers = Object.create(null);
Module.blockReadBuffers = Object.create(null);
var writerDev = FS.makedev(44, 1);
FS.registerDevice(writerDev, writerCallbacks);
var streamWriterDev = FS.makedev(44, 2);
FS.registerDevice(streamWriterDev, streamWriterCallbacks);

/**
 * Read a complete file from the in-memory filesystem.
 * @param name  Filename to read
 */
/// @types readFile@sync(name: string): @promise@Uint8Array@
fsBinding("readFile");

/**
 * Write a complete file to the in-memory filesystem.
 * @param name  Filename to write
 * @param content  Content to write to the file
 */
/// @types writeFile@sync(name: string, content: Uint8Array): @promise@Uint8Array@
fsBinding("writeFile");

/**
 * Delete a file in the in-memory filesystem.
 * @param name  Filename to delete
 */
/// @types unlink@sync(name: string): @promise@void@
fsBinding("unlink");

/**
 * Unmount a mounted filesystem.
 * @param mountpoint  Path where the filesystem is mounted
 */
/// @types unmount@sync(mountpoint: string): @promise@void@
fsBinding("unmount");

fsBinding("mkdev");

/**
 * Make a lazy file. Direct link to createLazyFile.
 */
/* @types
 * createLazyFile@sync(
 *     parent: string, name: string, url: string, canRead: boolean,
 *     canWrite: boolean
 * ): @promise@void@
 */
fsBinding("createLazyFile");

/**
 * Make a reader device.
 * @param name  Filename to create.
 * @param mode  Unix permissions (pointless since this is an in-memory
 *              filesystem)
 */
/// @types mkreaderdev@sync(name: string, mode?: number): @promise@void@
Module.mkreaderdev = function(loc, mode) {
    FS.mkdev(loc, mode?mode:0x1FF, readerDev);
    Module.readBuffers[loc] = {
        buf: new Uint8Array(0),
        eof: false,
        errorCode: 0,
        error: null
    };
    return 0;
};

/**
 * Make a block reader "device". Technically a file that we then hijack to have
 * our behavior.
 * @param name  Filename to create.
 * @param size  Size of the device to present.
 */
/// @types mkblockreaderdev@sync(name: string, size: number): @promise@void@
var mkblockreaderdev = Module.mkblockreaderdev = function(name, size) {
    FS.writeFile(name, new Uint8Array(0));
    var f = FS.open(name, 0);

    var super_node_ops = f.node.node_ops;
    var node_ops = f.node.node_ops = Object.create(super_node_ops);
    node_ops.getattr = function(node) {
        var ret = super_node_ops.getattr(node);
        ret.size = size;
        ret.blksize = 4096;
        ret.blocks = Math.ceil(size / 4096);
        return ret;
    };

    f.node.stream_ops = blockReaderCallbacks;
    f.node.ff_block_reader_dev_size = size;

    Module.blockReadBuffers[name] = {
        position: -1,
        buf: new Uint8Array(0),
        ready: false,
        errorCode: 0,
        error: null
    };

    FS.close(f);
};

// Readahead devices
var readaheads = {};

// Original onblockread
var preReadaheadOnBlockRead = null;

// Passthru for readahead.
function readaheadOnBlockRead(name, position, length) {
    if (!(name in readaheads)) {
        if (preReadaheadOnBlockRead)
            return preReadaheadOnBlockRead(name, position, length);
        return;
    }

    var ra = readaheads[name];

    function then() {
        if (ra.position !== position) {
            ra.position = position;
            ra.buf = null;
            ra.bufPromise = ra.file.slice(position, position + length).arrayBuffer()
                .then(function(ret) {
                    ra.buf = ret;
                }).catch(function(ex) {
                    console.error(ex + "\n" + ex.stack);
                    ra.buf = new Uint8Array(0);
                }).then(then);
            return;
        }

        ff_block_reader_dev_send(name, position, new Uint8Array(ra.buf));

        // Attempt to predict the next read
        position += length;
        ra.position = position;
        ra.buf = null;
        ra.bufPromise = ra.file.slice(position, position + length).arrayBuffer()
            .then(function(ret) {
                ra.buf = ret;
            }).catch(function(ex) {
                console.error(ex + "\n" + ex.stack);
                ra.buf = new Uint8Array(0);
            });
    }

    if (!ra.buf && ra.bufPromise)
        ra.bufPromise.then(then);
    else
        then();
}

/**
 * Make a readahead device. This reads a File (or other Blob) and attempts to
 * read ahead of whatever libav actually asked for. Note that this overrides
 * onblockread, so if you want to support both kinds of files, make sure you set
 * onblockread before calling this.
 * @param name  Filename to create.
 * @param file  Blob or file to read.
 */
/// @types mkreadaheadfile@sync(name: string, file: Blob): @promise@void@
Module.mkreadaheadfile = function(name, file) {
    if (Module.onblockread !== readaheadOnBlockRead) {
        preReadaheadOnBlockRead = Module.onblockread;
        Module.onblockread = readaheadOnBlockRead;
    }

    mkblockreaderdev(name, file.size);
    readaheads[name] = {
        file: file,
        position: -1,
        bufPromise: null,
        buf: null
    };
};

/**
 * Unlink a readahead file. Also gets rid of the File reference.
 * @param name  Filename to unlink.
 */
/// @types unlinkreadaheadfile@sync(name: string): @promise@void@
Module.unlinkreadaheadfile = function(name) {
    FS.unlink(name);
    delete readaheads[name];
};

/**
 * Make a writer device.
 * @param name  Filename to create
 * @param mode  Unix permissions
 */
/// @types mkwriterdev@sync(name: string, mode?: number): @promise@void@
var mkwriterdev = Module.mkwriterdev = function(loc, mode) {
    FS.mkdev(loc, mode?mode:0x1FF, writerDev);
    return 0;
};

/**
 * Make a stream writer device. The same as a writer device but does not allow
 * seeking.
 * @param name  Filename to create
 * @param mode  Unix permissions
 */
/// @types mkstreamwriterdev@sync(name: string, mode?: number): @promise@void@
Module.mkstreamwriterdev = function(loc, mode) {
    FS.mkdev(loc, mode?mode:0x1FF, streamWriterDev);
    return 0;
};

/**
 * Mount a writer *filesystem*. All files created in this filesystem will be
 * redirected as writers. The directory will be created for you if it doesn't
 * already exist, but it may already exist.
 * @param mountpoint  Directory to mount as a writer filesystem
 */
/// @types mountwriterfs@sync(mountpoint: string): @promise@void@
Module.mountwriterfs = function(mountpoint) {
    try {
        FS.mkdir(mountpoint);
    } catch (ex) {}
    FS.mount(streamWriterFS, {}, mountpoint);
    return 0;
}

// Users waiting to read
Module.ff_reader_dev_waiters = Object.create(null);

/**
 * Make a workerfs file. Returns the filename that it's mounted to.
 * @param name  Filename to use.
 * @param blob  Blob to load at that file.
 */
/// @types mkworkerfsfile@sync(name: string, blob: Blob): @promise@string@
Module.mkworkerfsfile = function(name, blob) {
    FS.mkdir("/" + name + ".d");
    FS.mount(WORKERFS, {
        blobs: [{name: name, data: blob}]
    }, "/" + name + ".d");
    return "/" + name + ".d/" + name;
};

/**
 * Unmount (unmake) a workerfs file. Give the *original name you provided*, not
 * the name mkworkerfsfile returned.
 * @param name  Filename to unmount.
 */
/// @types unlinkworkerfsfile@sync(name: string): @promise@void@
Module.unlinkworkerfsfile = function(name) {
    FS.unmount("/" + name + ".d");
    FS.rmdir("/" + name + ".d");
};

// FileSystemFileHandle devices
var fsfhs = {};

// Original onwrite
var preFSFHOnWrite = null;

// Passthru for FSFH writing.
function fsfhOnWrite(name, position, buffer) {
    if (!(name in fsfhs)) {
        if (preFSFHOnWrite)
            return preFSFHOnWrite(name, position, buffer);
        return;
    }

    var h = fsfhs[name];
    buffer = buffer.slice(0);

    if (h.syncHandle) {
        h.syncHandle.write(buffer.buffer, {
            at: position
        });
        return;
    }

    var p = h.promise.then(function() {
        return h.handle.write({
            type: "write",
            position: position,
            data: buffer
        });
    });

    h.promise = p.catch(console.error);
    return p;
}

/**
 * Make a FileSystemFileHandle device. This writes via a FileSystemFileHandle,
 * synchronously if possible. Note that this overrides onwrite, so if you want
 * to support both kinds of files, make sure you set onwrite before calling
 * this.
 * @param name  Filename to create.
 * @param fsfh  FileSystemFileHandle corresponding to this filename.
 */
/// @types mkfsfhfile(name: string, fsfh: FileSystemFileHandle): Promise<void>
Module.mkfsfhfile = function(name, fsfh) {
    if (Module.onwrite !== fsfhOnWrite) {
        preFSFHOnWrite = Module.onwrite;
        Module.onwrite = fsfhOnWrite;
    }

    mkwriterdev(name);

    var h = fsfhs[name] = {
        promise: Promise.all([])
    };
    h.promise = h.promise.then(function() {
        return fsfh.createSyncAccessHandle();
    }).then(function(syncHandle) {
        h.syncHandle = syncHandle;
    }).catch(function() {
        return fsfh.createWritable();
    }).then(function(handle) {
        h.handle = handle;
    });
    return h.promise;
};

/**
 * Unlink a FileSystemFileHandle file. Also closes the file handle.
 * @param name  Filename to unlink.
 */
/// @types unlinkfsfhfile(name: string): Promise<void>
Module.unlinkfsfhfile = function(name) {
    FS.unlink(name);
    var h = fsfhs[name];
    delete fsfhs[name];

    if (h.syncHandle) {
        h.syncHandle.close();
        return Promise.all([]);
    }

    return h.promise.then(function() {
        return h.handle.close();
    });
}

/**
 * Send some data to a reader device. To indicate EOF, send null. To indicate an
 * error, send EOF and include an error code in the options.
 * @param name  Filename of the reader device.
 * @param data  Data to send.
 * @param opts  Optional send options, such as an error code.
 */
/* @types
 * ff_reader_dev_send@sync(
 *     name: string, data: Uint8Array | null,
 *     opts?: {
 *         errorCode?: number,
 *         error?: any // any other error, used internally
 *     }
 * ): @promise@void@
 */
var ff_reader_dev_send = Module.ff_reader_dev_send = function(name, data, opts) {
    opts = opts || {};
    var idata = Module.readBuffers[name];

    if (data === null) {
        // EOF or error
        idata.eof = true;

    } else {
        var newbuf = new Uint8Array(idata.buf.length + data.length);
        newbuf.set(idata.buf);
        newbuf.set(data, idata.buf.length);
        idata.buf = newbuf;

    }

    idata.ready = true;

    idata.errorCode = 0;
    if (typeof opts.errorCode === "number")
        idata.errorCode = opts.errorCode;
    idata.error = null;
    if (opts.error)
        idata.error = opts.error;

    // Wake up waiters
    var waiters = Module.ff_reader_dev_waiters[name] || [];
    delete Module.ff_reader_dev_waiters[name];
    for (var i = 0; i < waiters.length; i++)
        waiters[i]();
};

/**
 * Send some data to a block reader device. To indicate EOF, send null (but note
 * that block read devices have a fixed size, and will automatically send EOF
 * for reads outside of that size, so you should not normally need to send EOF).
 * To indicate an error, send EOF and include an error code in the options.
 * @param name  Filename of the reader device.
 * @param pos  Position of the data in the file.
 * @param data  Data to send.
 * @param opts  Optional send options, such as an error code.
 */
/* @types
 * ff_block_reader_dev_send@sync(
 *     name: string, pos: number, data: Uint8Array | null,
 *     opts?: {
 *         errorCode?: number,
 *         error?: any // any other error, used internally
 *     }
 * ): @promise@void@
 */
var ff_block_reader_dev_send = Module.ff_block_reader_dev_send = function(name, pos, data, opts) {
    opts = opts || {};
    var idata = Module.blockReadBuffers[name];
    idata.position = pos;
    idata.buf = data;
    idata.ready = true;
    idata.errorCode = 0;
    idata.error = null;

    if (data === null)
        idata.buf = new Uint8Array(0);

    if (typeof opts.errorCode === "number")
        idata.errorCode = opts.errorCode;
    if (opts.error)
        idata.error = opts.error;

    // Wake up waiters
    var waiters = Module.ff_reader_dev_waiters[name] || [];
    delete Module.ff_reader_dev_waiters[name];
    for (var i = 0; i < waiters.length; i++)
        waiters[i]();
};

/**
 * @deprecated
 * DEPRECATED. Use the onread callback.
 * Metafunction to determine whether any device has any waiters. This can be
 * used to determine whether more data needs to be sent before a previous step
 * will be fully resolved.
 * @param name  Optional name of file to check for waiters
 */
/// @types ff_reader_dev_waiting@sync(name?: string): @promise@boolean@
var ff_reader_dev_waiting = Module.ff_reader_dev_waiting = function(name) {
    console.log("[libav.js] ff_reader_dev_waiting is deprecated. Use the onread callback.");
    return ff_nothing().then(function() {
        if (name)
            return !!Module.ff_reader_dev_waiters[name];
        else
            return !!Object.keys(Module.ff_reader_dev_waiters).length;
    });
};

/**
 * Internal function to determine if this device is ready (to avoid race
 * conditions).
 */
Module.readerDevReady = function(fd) {
    var stream = FS.streams[fd].node.name;
    if (stream in Module.readBuffers)
        return Module.readBuffers[stream].ready;
    else if (stream in Module.blockReadBuffers)
        return Module.blockReadBuffers[stream].ready;
    return false;
};

/**
 * Internal function to get the name of a file being read by an FD.
 */
Module.fdName = function(fd) {
    return FS.streams[fd].node.name;
};

/**
 * Metafunction to initialize an encoder with all the bells and whistles.
 * Returns [AVCodec, AVCodecContext, AVFrame, AVPacket, frame_size]
 * @param name  libav name of the codec
 * @param opts  Encoder options
 */
/* @types
 * ff_init_encoder@sync(
 *     name: string, opts?: {
 *         ctx?: AVCodecContextProps,
 *         time_base?: [number, number],
 *         options?: Record<string, string>
 *     }
 * ): @promise@[number, number, number, number, number]@
 */
var ff_init_encoder = Module.ff_init_encoder = function(name, opts) {
    opts = opts || {};

    var codec = avcodec_find_encoder_by_name(name);
    if (codec === 0)
        throw new Error("Codec not found");

    var c = avcodec_alloc_context3(codec);
    if (c === 0)
        throw new Error("Could not allocate audio codec context");

    var ctxProps = opts.ctx || {};
    for (var prop in ctxProps)
        this["AVCodecContext_" + prop + "_s"](c, ctxProps[prop]);

    var time_base = opts.time_base || [1, 1000];
    AVCodecContext_time_base_s(c, time_base[0], time_base[1]);

    var options = 0;
    if (opts.options) {
        for (var prop in opts.options)
            options = av_dict_set_js(options, prop, opts.options[prop], 0);
    }

    var ret = avcodec_open2_js(c, codec, options);
    if (ret < 0)
        throw new Error("Could not open codec: " + ff_error(ret));

    var frame = av_frame_alloc();
    if (frame === 0)
        throw new Error("Could not allocate frame");
    var pkt = av_packet_alloc();
    if (pkt === 0)
        throw new Error("Could not allocate packet");

    var frame_size = AVCodecContext_frame_size(c);

    return [codec, c, frame, pkt, frame_size];
};

/**
 * Metafunction to initialize a decoder with all the bells and whistles.
 * Similar to ff_init_encoder but doesn't need to initialize the frame.
 * Returns [AVCodec, AVCodecContext, AVPacket, AVFrame]
 * @param name  libav decoder identifier or name
 * @param config  Decoder configuration. Can just be a number for codec
 *                parameters, or can be multiple configuration options.
 */
/* @types
 * ff_init_decoder@sync(
 *     name: string | number, config?: number | {
 *         codecpar?: number | CodecParameters,
 *         time_base?: [number, number]
 *     }
 * ): @promise@[number, number, number, number]@
 */
var ff_init_decoder = Module.ff_init_decoder = function(name, config) {
    if (typeof config === "number") {
        config = {codecpar: config};
    } else {
        config = config || {};
    }

    var codec, ret;
    if (typeof name === "string")
        codec = avcodec_find_decoder_by_name(name);
    else
        codec = avcodec_find_decoder(name);
    if (codec === 0)
        throw new Error("Codec not found");

    var c = avcodec_alloc_context3(codec);
    if (c === 0)
        throw new Error("Could not allocate audio codec context");

    var codecid = AVCodecContext_codec_id(c);

    if (config.codecpar) {
        var codecparPtr = 0;
        var codecpar = config.codecpar;
        if (typeof codecpar === "object") {
            codecparPtr = avcodec_parameters_alloc();
            if (codecparPtr === 0)
                throw new Error("Failed to allocate codec parameters");
            ff_copyin_codecpar(codecparPtr, codecpar);
            codecpar = codecparPtr;
        }
        ret = avcodec_parameters_to_context(c, codecpar);
        if (codecparPtr)
            avcodec_parameters_free_js(codecparPtr);
        if (ret < 0)
            throw new Error("Could not set codec parameters: " + ff_error(ret));
    }

    // If it is not set, use the copy.
    if (AVCodecContext_codec_id(c) === 0) AVCodecContext_codec_id_s(c, codecid);

    // Keep the time base
    if (config.time_base)
        AVCodecContext_time_base_s(c, config.time_base[0], config.time_base[1]);

    ret = avcodec_open2(c, codec, 0);
    if (ret < 0)
        throw new Error("Could not open codec: " + ff_error(ret));

    var pkt = av_packet_alloc();
    if (pkt === 0)
        throw new Error("Could not allocate packet");

    var frame = av_frame_alloc();
    if (frame === 0)
        throw new Error("Could not allocate frame");

    return [codec, c, pkt, frame];
};

/**
 * Free everything allocated by ff_init_encoder.
 * @param c  AVCodecContext
 * @param frame  AVFrame
 * @param pkt  AVPacket
 */
/* @types
 * ff_free_encoder@sync(
 *     c: number, frame: number, pkt: number
 * ): @promise@void@
 */
var ff_free_encoder = Module.ff_free_encoder = function(c, frame, pkt) {
    av_frame_free_js(frame);
    av_packet_free_js(pkt);
    avcodec_free_context_js(c);
};

/**
 * Free everything allocated by ff_init_decoder
 * @param c  AVCodecContext
 * @param pkt  AVPacket
 * @param frame  AVFrame
 */
/* @types
 * ff_free_decoder@sync(
 *     c: number, pkt: number, frame: number
 * ): @promise@void@
 */
var ff_free_decoder = Module.ff_free_decoder = function(c, pkt, frame) {
    ff_free_encoder(c, frame, pkt);
};

/**
 * Encode some number of frames at once. Done in one go to avoid excess message
 * passing.
 * @param ctx  AVCodecContext
 * @param frame  AVFrame
 * @param pkt  AVPacket
 * @param inFrames  Array of frames in libav.js format
 * @param config  Encoding options. May be "true" to indicate end of stream.
 */
/* @types
 * ff_encode_multi@sync(
 *     ctx: number, frame: number, pkt: number, inFrames: (Frame | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         copyoutPacket?: "default"
 *     }
 * ): @promise@Packet[]@
 * ff_encode_multi@sync(
 *     ctx: number, frame: number, pkt: number, inFrames: (Frame | number)[],
 *     config: {
 *         fin?: boolean,
 *         copyoutPacket: "ptr"
 *     }
 * ): @promise@number[]@
 */
var ff_encode_multi = Module.ff_encode_multi = function(ctx, frame, pkt, inFrames, config) {
    if (typeof config === "boolean") {
        config = {fin: config};
    } else {
        config = config || {};
    }

    var outPackets = [];
    var tbNum = AVCodecContext_time_base_num(ctx);
    var tbDen = AVCodecContext_time_base_den(ctx);

    var copyoutPacket = function(ptr) {
        var ret = ff_copyout_packet(ptr);
        if (!ret.time_base_num) {
            ret.time_base_num = tbNum;
            ret.time_base_den = tbDen;
        }
        return ret;
    };

    if (config.copyoutPacket === "ptr") {
        copyoutPacket = function(ptr) {
            var ret = ff_copyout_packet_ptr(ptr);
            if (!AVPacket_time_base_num(ret))
                AVPacket_time_base_s(ret, tbNum, tbDen);
            return ret;
        };
    }

    function handleFrame(inFrame) {
        if (inFrame !== null) {
            ff_copyin_frame(frame, inFrame);
            if (tbNum) {
                if (typeof inFrame === "number") {
                    var itbn = AVFrame_time_base_num(frame);
                    if (itbn) {
                        ff_frame_rescale_ts_js(
                            frame,
                            itbn, AVFrame_time_base_den(frame),
                            tbNum, tbDen
                        );
                        AVFrame_time_base_s(frame, tbNum, tbDen);
                    }
                } else if (inFrame && inFrame.time_base_num) {
                    ff_frame_rescale_ts_js(
                        frame,
                        inFrame.time_base_num, inFrame.time_base_den,
                        tbNum, tbDen
                    );
                    AVFrame_time_base_s(frame, tbNum, tbDen);
                }
            }
        }

        var ret = avcodec_send_frame(ctx, inFrame?frame:0);
        if (ret < 0)
            throw new Error("Error sending the frame to the encoder: " + ff_error(ret));
        if (inFrame)
            av_frame_unref(frame);

        while (true) {
            ret = avcodec_receive_packet(ctx, pkt);
            if (ret === -6 /* EAGAIN */ || ret === -0x20464f45 /* AVERROR_EOF */)
                return;
            else if (ret < 0)
                throw new Error("Error encoding audio frame: " + ff_error(ret));

            outPackets.push(copyoutPacket(pkt));
            av_packet_unref(pkt);
        }
    }

    inFrames.forEach(handleFrame);

    if (config.fin)
        handleFrame(null);

    return outPackets;
};

/**
 * Decode some number of packets at once. Done in one go to avoid excess
 * message passing.
 * @param ctx  AVCodecContext
 * @param pkt  AVPacket
 * @param frame  AVFrame
 * @param inPackets  Incoming packets to decode
 * @param config  Decoding options. May be "true" to indicate end of stream.
 */
/* @types
 * ff_decode_multi@sync(
 *     ctx: number, pkt: number, frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame?: "default" | "video" | "video_packed"
 *     }
 * ): @promise@Frame[]@
 * ff_decode_multi@sync(
 *     ctx: number, pkt: number, frame: number, inPackets: (Packet | number)[],
 *     config: {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame: "ptr"
 *     }
 * ): @promise@number[]@
 * ff_decode_multi@sync(
 *     ctx: number, pkt: number, frame: number, inPackets: (Packet | number)[],
 *     config: {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame: "ImageData"
 *     }
 * ): @promise@ImageData[]@
 */
var ff_decode_multi = Module.ff_decode_multi = function(ctx, pkt, frame, inPackets, config) {
    var outFrames = [];
    var transfer = [];
    if (typeof config === "boolean") {
        config = {fin: config};
    } else {
        config = config || {};
    }

    var tbNum = AVCodecContext_time_base_num(ctx);
    var tbDen = AVCodecContext_time_base_den(ctx);

    var copyoutFrameO = ff_copyout_frame;
    if (config.copyoutFrame)
        copyoutFrameO = ff_copyout_frame_versions[config.copyoutFrame];
    var copyoutFrame = function(ptr) {
        var ret = copyoutFrameO(ptr);
        if (!ret.time_base_num) {
            ret.time_base_num = tbNum;
            ret.time_base_den = tbDen;
        }
        return ret;
    };
    if (config.copyoutFrame === "ptr") {
        copyoutFrame = function(ptr) {
            var ret = ff_copyout_frame_ptr(ptr);
            if (!AVFrame_time_base_num(ret))
                AVFrame_time_base_s(ret, tbNum, tbDen);
            return ret;
        };
    }

    function handlePacket(inPacket) {
        var ret;

        if (inPacket !== null) {
            ret = av_packet_make_writable(pkt);
            if (ret < 0)
                throw new Error("Failed to make packet writable: " + ff_error(ret));
            ff_copyin_packet(pkt, inPacket);

            if (tbNum) {
                if (typeof inPacket === "number") {
                    var iptbn = AVPacket_time_base_num(pkt);
                    if (iptbn) {
                        av_packet_rescale_ts_js(
                            pkt,
                            iptbn, AVPacket_time_base_den(pkt),
                            tbNum, tbDen
                        );
                        AVPacket_time_base_s(pkt, tbNum, tbDen);
                    }
                } else if (inPacket && inPacket.time_base_num) {
                    av_packet_rescale_ts_js(
                        pkt,
                        inPacket.time_base_num, inPacket.time_base_den,
                        tbNum, tbDen
                    );
                    AVPacket_time_base_s(pkt, tbNum, tbDen);
                }
            }
        } else {
            av_packet_unref(pkt);
        }

        ret = avcodec_send_packet(ctx, pkt);
        if (ret < 0) {
            var err = "Error submitting the packet to the decoder: " + ff_error(ret);
            if (!config.ignoreErrors)
                throw new Error(err);
            else {
                console.log(err);
                av_packet_unref(pkt);
                return;
            }
        }
        av_packet_unref(pkt);

        while (true) {
            ret = avcodec_receive_frame(ctx, frame);
            if (ret === -6 /* EAGAIN */ || ret === -0x20464f45 /* AVERROR_EOF */)
                return;
            else if (ret < 0)
                throw new Error("Error decoding audio frame: " + ff_error(ret));

            var outFrame = copyoutFrame(frame);
            if (outFrame && outFrame.libavjsTransfer && outFrame.libavjsTransfer.length)
                transfer.push.apply(transfer, outFrame.libavjsTransfer);
            outFrames.push(outFrame);
            av_frame_unref(frame);
        }
    }

    inPackets.forEach(handlePacket);

    if (config.fin)
        handlePacket(null);

    outFrames.libavjsTransfer = transfer;
    return outFrames;
};

/* Set the content of a packet. Necessary because we tend to strip packets of their content. */
var ff_set_packet = Module.ff_set_packet = function(pkt, data) {
    if (data.length === 0) {
        av_packet_unref(pkt);
    } else {
        var size = AVPacket_size(pkt);
        if (size < data.length) {
            var ret = av_grow_packet(pkt, data.length - size);
            if (ret < 0)
                throw new Error("Error growing packet: " + ff_error(ret));
        } else if (size > data.length)
            av_shrink_packet(pkt, data.length);
    }
    var ptr = AVPacket_data(pkt);
    Module.HEAPU8.set(data, ptr);
};

/**
 * Initialize a muxer format, format context and some number of streams.
 * Returns [AVFormatContext, AVOutputFormat, AVIOContext, AVStream[]]
 * @param opts  Muxer options
 * @param stramCtxs  Context info for each stream to mux
 */
/* @types
 * ff_init_muxer@sync(
 *     opts: {
 *         oformat?: number, // format pointer
 *         format_name?: string, // libav name
 *         filename?: string,
 *         device?: boolean, // Create a writer device
 *         open?: boolean, // Open the file for writing
 *         codecpars?: boolean // Streams is in terms of codecpars, not codecctx
 *     },
 *     streamCtxs: [number, number, number][] // AVCodecContext | AVCodecParameters, time_base_num, time_base_den
 * ): @promise@[number, number, number, number[]]@
 */
var ff_init_muxer = Module.ff_init_muxer = function(opts, streamCtxs) {
    var oformat = opts.oformat ? opts.oformat : 0;
    var format_name = opts.format_name ? opts.format_name : null;
    var filename = opts.filename ? opts.filename : null;
    var oc = avformat_alloc_output_context2_js(oformat, format_name, filename);
    if (oc === 0)
        throw new Error("Failed to allocate output context");
    var fmt = AVFormatContext_oformat(oc);
    var sts = [];
    streamCtxs.forEach(function(ctx) {
        var st = avformat_new_stream(oc, 0);
        if (st === 0)
            throw new Error("Could not allocate stream");
        sts.push(st);
        var codecpar = AVStream_codecpar(st);
        var ret;
        if (opts.codecpars) {
            ret = avcodec_parameters_copy(codecpar, ctx[0]);
            AVCodecParameters_codec_tag_s(codecpar, 0);
        } else {
            ret = avcodec_parameters_from_context(codecpar, ctx[0]);
        }
        if (ret < 0)
            throw new Error("Could not copy the stream parameters: " + ff_error(ret));
        AVStream_time_base_s(st, ctx[1], ctx[2]);
    });

    // Set up the device if requested
    if (opts.device)
        FS.mkdev(opts.filename, 0x1FF, writerDev);

    // Open the actual file if requested
    var pb = null;
    if (opts.open) {
        pb = avio_open2_js(opts.filename, 2 /* AVIO_FLAG_WRITE */, 0, 0);
        if (pb === 0)
            throw new Error("Could not open file");
        AVFormatContext_pb_s(oc, pb);
    }

    return [oc, fmt, pb, sts];
};

/**
 * Free up a muxer format and/or file
 * @param oc  AVFormatContext
 * @param pb  AVIOContext
 */
/// @types ff_free_muxer@sync(oc: number, pb: number): @promise@void@
var ff_free_muxer = Module.ff_free_muxer = function(oc, pb) {
    avformat_free_context(oc);
    if (pb)
        avio_close(pb);
};

/**
 * Initialize a demuxer from a file and format context, and get the list of
 * codecs/types.
 * Returns [AVFormatContext, Stream[]]
 * @param filename  Filename to open
 * @param fmt  Format to use (optional)
 */
/* @types
 * ff_init_demuxer_file@sync(
 *     filename: string, fmt?: string
 * ): @promsync@[number, Stream[]]@
 */
function ff_init_demuxer_file(filename, fmt) {
    var fmt_ctx;

    return avformat_open_input_js(filename, fmt?fmt:null, null).then(function(ret) {
        fmt_ctx = ret;
        if (fmt_ctx === 0)
            throw new Error("Could not open source file");

        return avformat_find_stream_info(fmt_ctx, 0);

    }).then(function() {
        var nb_streams = AVFormatContext_nb_streams(fmt_ctx);
        var streams = [];
        for (var i = 0; i < nb_streams; i++) {
            var inStream = AVFormatContext_streams_a(fmt_ctx, i);
            var outStream = {
                ptr: inStream,
                index: i
            };

            // Codec info
            var codecpar = AVStream_codecpar(inStream);
            outStream.codecpar = codecpar;
            outStream.codec_type = AVCodecParameters_codec_type(codecpar);
            outStream.codec_id = AVCodecParameters_codec_id(codecpar);

            // Duration and related
            outStream.time_base_num = AVStream_time_base_num(inStream);
            outStream.time_base_den = AVStream_time_base_den(inStream);
            outStream.duration_time_base = AVStream_duration(inStream) + (AVStream_durationhi(inStream)*0x100000000);
            outStream.duration = outStream.duration_time_base * outStream.time_base_num / outStream.time_base_den;

            streams.push(outStream);
        }
        return [fmt_ctx, streams];

    });
}
Module.ff_init_demuxer_file = function() {
    var args = arguments;
    return serially(function() {
        return ff_init_demuxer_file.apply(void 0, args);
    });
};

/**
 * Write some number of packets at once.
 * @param oc  AVFormatContext
 * @param pkt  AVPacket
 * @param inPackets  Packets to write
 * @param interleave  Set to false to *not* use the interleaved writer.
 *                    Interleaving is the default.
 */
/* @types
 * ff_write_multi@sync(
 *     oc: number, pkt: number, inPackets: (Packet | number)[], interleave?: boolean
 * ): @promise@void@
 */
var ff_write_multi = Module.ff_write_multi = function(oc, pkt, inPackets, interleave) {
    var step = av_interleaved_write_frame;
    if (interleave === false) step = av_write_frame;
    var tbs = {};

    inPackets.forEach(function(inPacket) {
        var ret = av_packet_make_writable(pkt);
        if (ret < 0)
            throw new Error("Error making packet writable: " + ff_error(ret));
        ff_copyin_packet(pkt, inPacket);

        var sti = inPacket.stream_index || 0;
        var iptbNum, iptbDen;
        if (typeof inPacket === "number") {
            iptbNum = AVPacket_time_base_num(pkt);
            iptbDen = AVPacket_time_base_den(pkt);
        } else {
            iptbNum = inPacket.time_base_num;
            iptbDen = inPacket.time_base_den;
        }
        if (iptbNum) {
            var tb = tbs[sti];
            if (!tb) {
                var str = AVFormatContext_streams_a(oc, sti);
                tb = tbs[sti] = [
                    AVStream_time_base_num(str),
                    AVStream_time_base_den(str)
                ];
            }
            if (tb[0]) {
                av_packet_rescale_ts_js(
                    pkt,
                    iptbNum, iptbDen,
                    tb[0], tb[1]
                );
                AVPacket_time_base_s(pkt, tb[0], tb[1]);
            }
        }

        step(oc, pkt);
        av_packet_unref(pkt);
    });
    av_packet_unref(pkt);
};

/**
 * Read many packets at once. If you don't set any limits, this function will
 * block (asynchronously) until the whole file is read, so make sure you set
 * some limits if you want to read a bit at a time. Returns a pair [result,
 * packets], where the result indicates whether an error was encountered, an
 * EOF, or simply limits (EAGAIN), and packets is a dictionary indexed by the
 * stream number in which each element is an array of packets from that stream.
 * @param fmt_ctx  AVFormatContext
 * @param pkt  AVPacket
 * @param opts  Other options
 */
/* @types
 * ff_read_frame_multi@sync(
 *     fmt_ctx: number, pkt: number, opts?: {
 *         limit?: number, // OUTPUT limit, in bytes
 *         unify?: boolean, // If true, unify the packets into a single stream (called 0), so that the output is in the same order as the input
 *         copyoutPacket?: "default" // Version of ff_copyout_packet to use
 *     }
 * ): @promsync@[number, Record<number, Packet[]>]@
 * ff_read_frame_multi@sync(
 *     fmt_ctx: number, pkt: number, opts: {
 *         limit?: number, // OUTPUT limit, in bytes
 *         unify?: boolean, // If true, unify the packets into a single stream (called 0), so that the output is in the same order as the input
 *         copyoutPacket: "ptr" // Version of ff_copyout_packet to use
 *     }
 * ): @promsync@[number, Record<number, number[]>]@
 */
function ff_read_frame_multi(fmt_ctx, pkt, opts) {
    var sz = 0;
    var outPackets = {};
    var tbs = {};

    if (typeof opts === "number")
        opts = {limit: opts};
    if (typeof opts === "undefined")
        opts = {};
    var unify = !!opts.unify;
    var copyoutPacket = ff_copyout_packet;
    if (opts.copyoutPacket)
        copyoutPacket = ff_copyout_packet_versions[opts.copyoutPacket];

    function step() {
        // Read the frame
        return av_read_frame(fmt_ctx, pkt).then(function(ret) {
            if (ret < 0)
                return [ret, outPackets];

            // And copy it out
            var packet = copyoutPacket(pkt);
            var stri = AVPacket_stream_index(pkt);

            // Get the time base correct
            var ptbNum, ptbDen;
            if (typeof packet === "number") {
                ptbNum = AVPacket_time_base_num(packet);
                ptbDen = AVPacket_time_base_den(packet);
            } else {
                ptbNum = packet.time_base_num;
                ptbDen = packet.time_base_den;
            }
            if (!ptbNum) {
                var tb = tbs[stri];
                if (!tb) {
                    var str = AVFormatContext_streams_a(fmt_ctx, stri);
                    tb = tbs[stri] = [
                        AVStream_time_base_num(str),
                        AVStream_time_base_den(str)
                    ];
                }
                if (typeof packet === "number") {
                    AVPacket_time_base_s(packet, tb[0], tb[1]);
                } else {
                    packet.time_base_num = tb[0];
                    packet.time_base_den = tb[1];
                }
            }

            // Put it in the output
            var idx = unify ? 0 : stri;
            if (!(idx in outPackets))
                outPackets[idx] = [];
            outPackets[idx].push(packet);
            sz += AVPacket_size(pkt);
            av_packet_unref(pkt);
            if (opts.limit && sz >= opts.limit)
                return [-6 /* EAGAIN */, outPackets];

            return Promise.all([]).then(step);
        });
    }

    return step();
}
Module.ff_read_frame_multi = function() {
    var args = arguments;
    return serially(function() {
        return ff_read_frame_multi.apply(void 0, args);
    });
};

/**
 * @deprecated
 * DEPRECATED. Use `ff_read_frame_multi`.
 * Read many packets at once. This older API is now deprecated. The devfile
 * parameter is unused and unsupported. Dev files should be used via the normal
 * `ff_reader_dev_waiting` API, rather than counting on device file limits, as
 * this function used to.
 * @param fmt_ctx  AVFormatContext
 * @param pkt  AVPacket
 * @param devfile  Unused
 * @param opts  Other options
 */
/* @types
 * ff_read_multi@sync(
 *     fmt_ctx: number, pkt: number, devfile?: string | null, opts?: {
 *         limit?: number, // OUTPUT limit, in bytes
 *         unify?: boolean, // If true, unify the packets into a single stream (called 0), so that the output is in the same order as the input
 *         copyoutPacket?: "default" // Version of ff_copyout_packet to use
 *     }
 * ): @promsync@[number, Record<number, Packet[]>]@
 * ff_read_multi@sync(
 *     fmt_ctx: number, pkt: number, devfile: string | null, opts: {
 *         limit?: number, // OUTPUT limit, in bytes
 *         devLimit?: number, // INPUT limit, in bytes (don't read if less than this much data is available)
 *         unify?: boolean, // If true, unify the packets into a single stream (called 0), so that the output is in the same order as the input
 *         copyoutPacket: "ptr" // Version of ff_copyout_packet to use
 *     }
 * ): @promsync@[number, Record<number, number[]>]@
 */
Module.ff_read_multi = function(fmt_ctx, pkt, devfile, opts) {
    console.log("[libav.js] ff_read_multi is deprecated. Use ff_read_frame_multi.");
    return Module.ff_read_frame_multi(fmt_ctx, pkt, opts);
};

/**
 * Initialize a filter graph. No equivalent free since you just need to free
 * the graph itself (av_filter_graph_free) and everything under it will be
 * freed automatically.
 * Returns [AVFilterGraph, AVFilterContext, AVFilterContext], where the second
 * and third are the input and output buffer source/sink. For multiple
 * inputs/outputs, the second and third will be arrays, as appropriate.
 * @param filters_descr  Filtergraph description
 * @param input  Input settings, or array of input settings for multiple inputs
 * @param output  Output settings, or array of output settings for multiple
 *                outputs
 */
/* @types
 * ff_init_filter_graph@sync(
 *     filters_descr: string,
 *     input: FilterIOSettings,
 *     output: FilterIOSettings
 * ): @promise@[number, number, number]@;
 * ff_init_filter_graph@sync(
 *     filters_descr: string,
 *     input: FilterIOSettings[],
 *     output: FilterIOSettings
 * ): @promise@[number, number[], number]@;
 * ff_init_filter_graph@sync(
 *     filters_descr: string,
 *     input: FilterIOSettings,
 *     output: FilterIOSettings[]
 * ): @promise@[number, number, number[]]@;
 * ff_init_filter_graph@sync(
 *     filters_descr: string,
 *     input: FilterIOSettings[],
 *     output: FilterIOSettings[]
 * ): @promise@[number, number[], number[]]@
 */
var ff_init_filter_graph = Module.ff_init_filter_graph = function(filters_descr, input, output) {
    var buffersrc, abuffersrc, buffersink, abuffersink, filter_graph,
        tmp_src_ctx, tmp_sink_ctx, src_ctxs, sink_ctxs, io_outputs, io_inputs,
        int32s;
    var instr, outstr;

    var multiple_inputs = !!input.length;
    if (!multiple_inputs) input = [input];
    var multiple_outputs = !!output.length;
    if (!multiple_outputs) output = [output];
    src_ctxs = [];
    sink_ctxs = [];

    try {
        buffersrc = avfilter_get_by_name("buffer");
        abuffersrc = avfilter_get_by_name("abuffer");
        buffersink = avfilter_get_by_name("buffersink");
        abuffersink = avfilter_get_by_name("abuffersink");

        filter_graph = avfilter_graph_alloc();
        if (filter_graph === 0)
            throw new Error("Failed to allocate filter graph");

        // Allocate all the "outputs" (our inputs)
        io_outputs = 0;
        var ii = 0;
        input.forEach(function(input) {
            // Allocate the output itself
            var next_io_outputs = avfilter_inout_alloc();
            if (next_io_outputs === 0)
                throw new Error("Failed to allocate outputs");
            AVFilterInOut_next_s(next_io_outputs, io_outputs);
            io_outputs = next_io_outputs;

            // Now create our input filter
            var nm = "in" + (multiple_inputs?ii:"");
            if (input.type === 0 /* AVMEDIA_TYPE_VIDEO */) {
                if (buffersrc === 0)
                    throw new Error("Failed to load buffer filter");
                var frame_rate = input.frame_rate;
                var time_base = input.time_base;
                if (typeof frame_rate === "undefined")
                    frame_rate = 30;
                if (typeof time_base === "undefined")
                    time_base = [1, frame_rate];
                tmp_src_ctx = avfilter_graph_create_filter_js(buffersrc, nm,
                    "time_base=" + time_base[0] + "/" + time_base[1] +
                    ":frame_rate=" + frame_rate +
                    ":pix_fmt=" + (input.pix_fmt?input.pix_fmt:0/*YUV420P*/) +
                    ":width=" + (input.width?input.width:640) +
                    ":height=" + (input.height?input.height:360),
                    null, filter_graph);

            } else { // audio filter
                if (abuffersrc === 0)
                    throw new Error("Failed to load abuffer filter");
                var sample_rate = input.sample_rate;
                var time_base = input.time_base;
                if (typeof sample_rate === "undefined")
                    sample_rate = 48000;
                if (typeof time_base === "undefined")
                    time_base = [1, sample_rate];
                tmp_src_ctx = avfilter_graph_create_filter_js(abuffersrc, nm,
                    "time_base=" + time_base[0] + "/" + time_base[1] +
                    ":sample_rate=" + sample_rate +
                    ":sample_fmt=" + (input.sample_fmt?input.sample_fmt:3/*FLT*/) +
                    ":channel_layout=0x" + (input.channel_layout?input.channel_layout:4/*MONO*/).toString(16),
                    null, filter_graph);

            }

            if (tmp_src_ctx === 0)
                throw new Error("Cannot create buffer source");
            src_ctxs.push(tmp_src_ctx);

            // Configure the inout
            instr = av_strdup(nm);
            if (instr === 0)
                throw new Error("Failed to allocate output");

            AVFilterInOut_name_s(io_outputs, instr);
            instr = 0;
            AVFilterInOut_filter_ctx_s(io_outputs, tmp_src_ctx);
            tmp_src_ctx = 0;
            AVFilterInOut_pad_idx_s(io_outputs, 0);
            ii++;
        });

        // Allocate all the "inputs" (our outputs)
        io_inputs = 0;
        var oi = 0;
        output.forEach(function(output) {
            // Allocate the input itself
            var next_io_inputs = avfilter_inout_alloc();
            if (next_io_inputs === 0)
                throw new Error("Failed to allocate inputs");
            AVFilterInOut_next_s(next_io_inputs, io_inputs);
            io_inputs = next_io_inputs;

            // Create the output filter
            var nm = "out" + (multiple_outputs?oi:"");
            if (output.type === 0 /* AVMEDIA_TYPE_VIDEO */) {
                if (buffersink === 0)
                    throw new Error("Failed to load buffersink filter");
                tmp_sink_ctx = avfilter_graph_create_filter_js(
                    buffersink, nm, null, null, filter_graph);
            } else { // audio
                tmp_sink_ctx = avfilter_graph_create_filter_js(abuffersink, nm,
                    null, null, filter_graph);
            }
            if (tmp_sink_ctx === 0)
                throw new Error("Cannot create buffer sink");
            sink_ctxs.push(tmp_sink_ctx);

            if (output.type === 0 /* AVMEDIA_TYPE_VIDEO */) {
                // Allocate space to transfer our options
                int32s = ff_malloc_int32_list([
                    output.pix_fmt?output.pix_fmt:0 /* YUV420P */, -1
                ]);
                if (int32s === 0)
                    throw new Error("Failed to transfer parameters");

                if (
                    av_opt_set_int_list_js(
                        tmp_sink_ctx, "pix_fmts", 4, int32s, -1, 1
                    ) < 0
                ) {
                    throw new Error("Failed to set filter parameters");
                }
                free(int32s);
                int32s = 0;

            } else { // audio
                // Allocate space to transfer our options
                int32s = ff_malloc_int32_list([
                    output.sample_fmt?output.sample_fmt:3/*FLT*/, -1,
                    output.sample_rate?output.sample_rate:48000, -1
                ]);
                if (int32s === 0)
                    throw new Error("Failed to transfer parameters");
                var ch_layout = output.channel_layout?output.channel_layout:4;
                var ch_layout_i64 = [~~ch_layout, Math.floor(ch_layout / 0x100000000)];

                if (
                    av_opt_set_int_list_js(
                        tmp_sink_ctx, "sample_fmts", 4, int32s, -1, 1 /* AV_OPT_SEARCH_CHILDREN */
                    ) < 0 ||
                    ff_buffersink_set_ch_layout(
                        tmp_sink_ctx,
                        ch_layout_i64[0], ch_layout_i64[1]
                    ) < 0 ||
                    av_opt_set_int_list_js(
                        tmp_sink_ctx, "sample_rates", 4, int32s + 8, -1, 1
                    ) < 0
                )
                {
                    throw new Error("Failed to set filter parameters");
                }
                free(int32s);
                int32s = 0;

            }

            // Configure it
            outstr = av_strdup(nm);
            if (outstr === 0)
                throw new Error("Failed to transfer parameters");
            AVFilterInOut_name_s(io_inputs, outstr);
            outstr = 0;
            AVFilterInOut_filter_ctx_s(io_inputs, tmp_sink_ctx);
            tmp_sink_ctx = 0;
            AVFilterInOut_pad_idx_s(io_inputs, 0);
            oi++;
        });

        // Parse it
        var ret = avfilter_graph_parse(filter_graph, filters_descr, io_inputs, io_outputs, 0);
        if (ret < 0)
            throw new Error("Failed to initialize filters: " + ff_error(ret));
        io_inputs = io_outputs = 0;

        // Set the output frame sizes
        var oi = 0;
        output.forEach(function(output) {
            if (output.frame_size)
                av_buffersink_set_frame_size(sink_ctxs[oi], output.frame_size);
            oi++;
        });

        // Configure it
        ret = avfilter_graph_config(filter_graph, 0);
        if (ret < 0)
            throw new Error("Failed to configure filter graph: " + ff_error(ret));

    } catch (ex) {
        // Clean up after ourselves
        if (io_outputs) avfilter_inout_free(io_outputs);
        if (io_inputs) avfilter_inout_free(io_inputs);
        if (filter_graph) avfilter_graph_free(filter_graph);
        if (tmp_src_ctx) avfilter_free(tmp_src_ctx);
        if (tmp_sink_ctx) avfilter_free(tmp_sink_ctx);
        if (int32s) free(int32s);
        if (instr) free(instr);
        if (outstr) free(outstr);
        throw ex;

    }

    // And finally, return the critical parts
    return [filter_graph, multiple_inputs ? src_ctxs : src_ctxs[0], multiple_outputs ? sink_ctxs : sink_ctxs[0]];
};

/**
 * Filter some number of frames, possibly corresponding to multiple sources.
 * Only one sink is allowed, but config is per source. Set
 * `config.ignoreSinkTimebase` to leave frames' timebase as it was, rather than
 * imposing the timebase of the buffer sink. Set `config.copyoutFrame` to use a
 * different copier than the default.
 * @param srcs  AVFilterContext(s), input
 * @param buffersink_ctx  AVFilterContext, output
 * @param framePtr  AVFrame
 * @param inFrames  Input frames, either as an array of frames or with frames
 *                  per input
 * @param config  Options. May be "true" to indicate end of stream.
 */
/* @types
 * ff_filter_multi@sync(
 *     srcs: number, buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[], config?: boolean | {
 *         fin?: boolean,
 *         ignoreSinkTimebase?: boolean,
 *         copyoutFrame?: "default" | "video" | "video_packed"
 *     }
 * ): @promise@Frame[]@;
 * ff_filter_multi@sync(
 *     srcs: number[], buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[][], config?: boolean[] | {
 *         fin?: boolean,
 *         ignoreSinkTimebase?: boolean,
 *         copyoutFrame?: "default" | "video" | "video_packed"
 *     }[]
 * ): @promise@Frame[]@
 * ff_filter_multi@sync(
 *     srcs: number, buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[], config: {
 *         fin?: boolean,
 *         ignoreSinkTimebase?: boolean,
 *         copyoutFrame: "ptr"
 *     }
 * ): @promise@number[]@;
 * ff_filter_multi@sync(
 *     srcs: number[], buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[][], config: {
 *         fin?: boolean,
 *         ignoreSinkTimebase?: boolean,
 *         copyoutFrame: "ptr"
 *     }[]
 * ): @promise@number[]@
 * ff_filter_multi@sync(
 *     srcs: number, buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[], config: {
 *         fin?: boolean,
 *         ignoreSinkTimebase?: boolean,
 *         copyoutFrame: "ImageData"
 *     }
 * ): @promise@ImageData[]@;
 * ff_filter_multi@sync(
 *     srcs: number[], buffersink_ctx: number, framePtr: number,
 *     inFrames: (Frame | number)[][], config: {
 *         fin?: boolean,
 *         ignoreSinkTimebase?: boolean,
 *         copyoutFrame: "ImageData"
 *     }[]
 * ): @promise@ImageData[]@
 */
var ff_filter_multi = Module.ff_filter_multi = function(srcs, buffersink_ctx, framePtr, inFrames, config) {
    var outFrames = [];
    var transfer = [];
    var tbNum = -1, tbDen = -1;

    if (!srcs.length) {
        srcs = [srcs];
        inFrames = [inFrames];
        config = [config];
    }

    config = config.map(function(config) {
        if (config === true)
            return {fin: true};
        return config || {};
    });

    // Find the longest buffer (ideally they're all the same)
    var max = inFrames.map(function(srcFrames) {
        return srcFrames.length;
    }).reduce(function(a, b) {
        return Math.max(a, b);
    });

    function handleFrame(buffersrc_ctx, inFrame, copyoutFrame, config) {
        if (inFrame !== null)
            ff_copyin_frame(framePtr, inFrame);

        var ret = av_buffersrc_add_frame_flags(buffersrc_ctx, inFrame ? framePtr : 0, 8 /* AV_BUFFERSRC_FLAG_KEEP_REF */);
        if (ret < 0)
            throw new Error("Error while feeding the audio filtergraph: " + ff_error(ret));
        av_frame_unref(framePtr);

        while (true) {
            ret = av_buffersink_get_frame(buffersink_ctx, framePtr);
            if (ret === -6 /* EAGAIN */ || ret === -0x20464f45 /* AVERROR_EOF */)
                break;
            if (ret < 0)
                throw new Error("Error while receiving a frame from the filtergraph: " + ff_error(ret));

            if (tbNum < 0) {
                tbNum = av_buffersink_get_time_base_num(buffersink_ctx);
                tbDen = av_buffersink_get_time_base_den(buffersink_ctx);
            }

            var outFrame = copyoutFrame(framePtr);

            if (tbNum && !config.ignoreSinkTimebase) {
                if (typeof outFrame === "number") {
                    AVFrame_time_base_s(outFrame, tbNum, tbDen);
                } else if (outFrame) {
                    outFrame.time_base_num = tbNum;
                    outFrame.time_base_den = tbDen;
                }
            }

            if (outFrame && outFrame.libavjsTransfer && outFrame.libavjsTransfer.length)
                transfer.push.apply(transfer, outFrame.libavjsTransfer);
            outFrames.push(outFrame);
            av_frame_unref(framePtr);
        }
    }

    // Choose a frame copier per stream
    var copyoutFrames = [];
    for (var ti = 0; ti < inFrames.length; ti++) (function(ti) {
        var copyoutFrame = ff_copyout_frame;
        if (config[ti].copyoutFrame)
            copyoutFrame = ff_copyout_frame_versions[config[ti].copyoutFrame];
        copyoutFrames.push(copyoutFrame);
    })(ti);

    // Handle in *frame* order
    for (var fi = 0; fi <= max; fi++) {
        for (var ti = 0; ti < inFrames.length; ti++) {
            var inFrame = inFrames[ti][fi];
            if (inFrame) handleFrame(srcs[ti], inFrame, copyoutFrames[ti], config[ti]);
            else if (config[ti].fin) handleFrame(srcs[ti], null, copyoutFrames[ti], config[ti]);
        }
    }

    outFrames.libavjsTransfer = transfer;
    return outFrames;
};

/**
 * Decode and filter frames. Just a combination of ff_decode_multi and
 * ff_filter_multi that's all done on the libav.js side.
 * @param ctx  AVCodecContext
 * @param buffersrc_ctx  AVFilterContext, input
 * @param buffersink_ctx  AVFilterContext, output
 * @param pkt  AVPacket
 * @param frame  AVFrame
 * @param inPackets  Incoming packets to decode and filter
 * @param config  Decoding and filtering options. May be "true" to indicate end
 *                of stream.
 */
/* @types
 * ff_decode_filter_multi@sync(
 *     ctx: number, buffersrc_ctx: number, buffersink_ctx: number, pkt: number,
 *     frame: number, inPackets: (Packet | number)[],
 *     config?: boolean | {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame?: "default" | "video" | "video_packed"
 *     }
 * ): @promise@Frame[]@
 * ff_decode_filter_multi@sync(
 *     ctx: number, buffersrc_ctx: number, buffersink_ctx: number, pkt: number,
 *     frame: number, inPackets: (Packet | number)[],
 *     config: {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame: "ptr"
 *     }
 * ): @promise@number[]@
 * ff_decode_filter_multi@sync(
 *     ctx: number, buffersrc_ctx: number, buffersink_ctx: number, pkt: number,
 *     frame: number, inPackets: (Packet | number)[],
 *     config: {
 *         fin?: boolean,
 *         ignoreErrors?: boolean,
 *         copyoutFrame: "ImageData"
 *     }
 * ): @promise@ImageData[]@
 */
var ff_decode_filter_multi = Module.ff_decode_filter_multi = function(
    ctx, buffersrc_ctx, buffersink_ctx, pkt, frame, inPackets, config
) {
    if (typeof config === "boolean") {
        config = {fin: config};
    } else {
        config = config || {};
    }

    // 1: Decode
    var decodedFrames = ff_decode_multi(ctx, pkt, frame, inPackets, {
        fin: !!config.fin,
        ignoreErrors: !!config.ignoreErrors,
        copyoutFrame: "ptr"
    });

    // 2: Filter
    return ff_filter_multi(
        buffersrc_ctx, buffersink_ctx, frame, decodedFrames, {
            fin: !!config.fin,
            copyoutFrame: config.copyoutFrame || "default"
        }
    );
}

/**
 * Copy out a frame.
 * @param frame  AVFrame
 */
/// @types ff_copyout_frame@sync(frame: number): @promise@Frame@
var ff_copyout_frame = Module.ff_copyout_frame = function(frame) {
    var nb_samples = AVFrame_nb_samples(frame);
    if (nb_samples === 0) {
        // Maybe a video frame?
        var width = AVFrame_width(frame);
        if (width)
            return ff_copyout_frame_video_width(frame, width);
    }
    var channels = AVFrame_channels(frame);
    var format = AVFrame_format(frame);
    var transfer = [];
    var outFrame = {
        data: null,
        libavjsTransfer: transfer,
        channel_layout: AVFrame_channel_layout(frame),
        channels: channels,
        format: format,
        nb_samples: nb_samples,
        pts: AVFrame_pts(frame),
        ptshi: AVFrame_ptshi(frame),
        time_base_num: AVFrame_time_base_num(frame),
        time_base_den: AVFrame_time_base_den(frame),
        sample_rate: AVFrame_sample_rate(frame)
    };

    // FIXME: Need to support *every* format here
    if (format >= 5 /* U8P */) {
        // Planar format, multiple data pointers
        var data = [];
        for (var ci = 0; ci < channels; ci++) {
            var inData = AVFrame_data_a(frame, ci);
            var outData = null;
            switch (format) {
                case 5: // U8P
                    outData = copyout_u8(inData, nb_samples);
                    break;

                case 6: // S16P
                    outData = copyout_s16(inData, nb_samples);
                    break;

                case 7: // S32P
                    outData = copyout_s32(inData, nb_samples);
                    break;

                case 8: // FLT
                    outData = copyout_f32(inData, nb_samples);
                    break;
            }

            if (outData) {
                data.push(outData);
                transfer.push(outData.buffer);
            }
        }
        outFrame.data = data;

    } else {
        var ct = channels*nb_samples;
        var inData = AVFrame_data_a(frame, 0);
        var outData = null;
        switch (format) {
            case 0: // U8
                outData = copyout_u8(inData, ct);
                break;

            case 1: // S16
                outData = copyout_s16(inData, ct);
                break;

            case 2: // S32
                outData = copyout_s32(inData, ct);
                break;

            case 3: // FLT
                outData = copyout_f32(inData, ct);
                break;
        }

        if (outData) {
            outFrame.data = outData;
            transfer.push(outData.buffer);
        }

    }

    return outFrame;
};

/**
 * Copy out a video frame. `ff_copyout_frame` will copy out a video frame if a
 * video frame is found, but this may be faster if you know it's a video frame.
 * @param frame  AVFrame
 */
/// @types ff_copyout_frame_video@sync(frame: number): @promise@Frame@
var ff_copyout_frame_video = Module.ff_copyout_frame_video = function(frame) {
    return ff_copyout_frame_video_width(frame, AVFrame_width(frame));
};

// Copy out a video frame. Used internally by ff_copyout_frame.
var ff_copyout_frame_video_width = Module.ff_copyout_frame_video = function(frame, width) {
    var height = AVFrame_height(frame);
    var format = AVFrame_format(frame);
    var desc = av_pix_fmt_desc_get(format);
    var log2ch = AVPixFmtDescriptor_log2_chroma_h(desc);
    var layout = [];
    var transfer = [];
    var outFrame = {
        data: null,
        layout: layout,
        libavjsTransfer: transfer,
        width: width,
        height: height,
        crop: {
            top: AVFrame_crop_top(frame),
            bottom: AVFrame_crop_bottom(frame),
            left: AVFrame_crop_left(frame),
            right: AVFrame_crop_right(frame)
        },
        format: AVFrame_format(frame),
        key_frame: AVFrame_key_frame(frame),
        pict_type: AVFrame_pict_type(frame),
        pts: AVFrame_pts(frame),
        ptshi: AVFrame_ptshi(frame),
        time_base_num: AVFrame_time_base_num(frame),
        time_base_den: AVFrame_time_base_den(frame),
        sample_aspect_ratio: [
            AVFrame_sample_aspect_ratio_num(frame),
            AVFrame_sample_aspect_ratio_den(frame)
        ]
    };

    // Figure out the data range
    var dataLo = 1/0;
    var dataHi = 0;
    for (var p = 0; p < 8 /* AV_NUM_DATA_POINTERS */; p++) {
        var linesize = AVFrame_linesize_a(frame, p);
        if (!linesize)
            break;
        var plane = AVFrame_data_a(frame, p);
        if (plane < dataLo)
            dataLo = plane;
        var h = height;
        if (p === 1 || p === 2)
            h >>= log2ch;
        plane += linesize * h;
        if (plane > dataHi)
            dataHi = plane;
    }

    // Copy out that segment of data
    outFrame.data = Module.HEAPU8.slice(dataLo, dataHi);
    transfer.push(outFrame.data.buffer);

    // And describe the layout
    for (var p = 0; p < 8; p++) {
        var linesize = AVFrame_linesize_a(frame, p);
        if (!linesize)
            break;
        var plane = AVFrame_data_a(frame, p);
        layout.push({
            offset: plane - dataLo,
            stride: linesize
        });
    }

    return outFrame;
};

/**
 * Get the size of a packed video frame in its native format.
 * @param frame  AVFrame
 */
/// @types ff_frame_video_packed_size@sync(frame: number): @promise@Frame@
var ff_frame_video_packed_size = Module.ff_frame_video_packed_size = function(frame) {
    // FIXME: duplication
    var width = AVFrame_width(frame);
    var height = AVFrame_height(frame);
    var format = AVFrame_format(frame);
    var desc = av_pix_fmt_desc_get(format);

    // VERY simple bpp, assuming all components are 8-bit
    var bpp = 1;
    if (!(AVPixFmtDescriptor_flags(desc) & 0x10) /* planar */)
        bpp *= AVPixFmtDescriptor_nb_components(desc);

    var dataSz = 0;
    for (var i = 0; i < 8 /* AV_NUM_DATA_POINTERS */; i++) {
        var linesize = AVFrame_linesize_a(frame, i);
        if (!linesize)
            break;
        var w = width * bpp;
        var h = height;
        if (i === 1 || i === 2) {
            w >>= AVPixFmtDescriptor_log2_chroma_w(desc);
            h >>= AVPixFmtDescriptor_log2_chroma_h(desc);
        }
        dataSz += w * h;
    }

    return dataSz;
};

/* Copy out just the packed data from this frame, into the given buffer. Used
 * internally. */
function ff_copyout_frame_data_packed(data, layout, frame) {
    var width = AVFrame_width(frame);
    var height = AVFrame_height(frame);
    var format = AVFrame_format(frame);
    var desc = av_pix_fmt_desc_get(format);

    // VERY simple bpp, assuming all components are 8-bit
    var bpp = 1;
    if (!(AVPixFmtDescriptor_flags(desc) & 0x10) /* planar */)
        bpp *= AVPixFmtDescriptor_nb_components(desc);

    // Copy it out
    var dIdx = 0;
    for (var i = 0; i < 8 /* AV_NUM_DATA_POINTERS */; i++) {
        var linesize = AVFrame_linesize_a(frame, i);
        if (!linesize)
            break;
        var inData = AVFrame_data_a(frame, i);
        var w = width * bpp;
        var h = height;
        if (i === 1 || i === 2) {
            w >>= AVPixFmtDescriptor_log2_chroma_w(desc);
            h >>= AVPixFmtDescriptor_log2_chroma_h(desc);
        }
        layout.push({
            offset: dIdx,
            stride: w
        });
        for (var y = 0; y < h; y++) {
            var line = inData + y * linesize;
            data.set(
                Module.HEAPU8.subarray(line, line + w),
                dIdx
            );
            dIdx += w;
        }
    }
};

/**
 * Copy out a video frame, as a single packed Uint8Array.
 * @param frame  AVFrame
 */
/// @types ff_copyout_frame_video_packed@sync(frame: number): @promise@Frame@
var ff_copyout_frame_video_packed = Module.ff_copyout_frame_video_packed = function(frame) {
    var data = new Uint8Array(ff_frame_video_packed_size(frame));
    var layout = [];
    ff_copyout_frame_data_packed(data, layout, frame);

    var outFrame = {
        data: data,
        libavjsTransfer: [data.buffer],
        width: AVFrame_width(frame),
        height: AVFrame_height(frame),
        format: AVFrame_format(frame),
        key_frame: AVFrame_key_frame(frame),
        pict_type: AVFrame_pict_type(frame),
        pts: AVFrame_pts(frame),
        ptshi: AVFrame_ptshi(frame),
        time_base_num: AVFrame_time_base_num(frame),
        time_base_den: AVFrame_time_base_den(frame),
        sample_aspect_ratio: [
            AVFrame_sample_aspect_ratio_num(frame),
            AVFrame_sample_aspect_ratio_den(frame)
        ]
    };

    return outFrame;
};

/**
 * Copy out a video frame as an ImageData. The video frame *must* be RGBA for
 * this to work as expected (though some ImageData will be returned for any
 * frame).
 * @param frame  AVFrame
 */
/* @types
 * ff_copyout_frame_video_imagedata@sync(
 *     frame: number
 * ): @promise@ImageData@
 */
var ff_copyout_frame_video_imagedata = Module.ff_copyout_frame_video_imagedata = function(frame) {
    var width = AVFrame_width(frame);
    var height = AVFrame_height(frame);
    var id = new ImageData(width, height);
    var layout = [];
    ff_copyout_frame_data_packed(id.data, layout, frame);
    id.libavjsTransfer = [id.data.buffer];
    return id;
};

/**
 * Copy "out" a video frame by just allocating another frame in libav.
 * @param frame  AVFrame
 */
var ff_copyout_frame_ptr = Module.ff_copyout_frame_ptr = function(frame) {
    var ret = av_frame_clone(frame);
    if (!ret)
        throw new Error("Failed to allocate new frame");
    return ret;
};

// All of the versions of ff_copyout_frame
var ff_copyout_frame_versions = {
    default: ff_copyout_frame,
    video: ff_copyout_frame_video,
    video_packed: ff_copyout_frame_video_packed,
    ImageData: ff_copyout_frame_video_imagedata,
    ptr: ff_copyout_frame_ptr
};

/**
 * Copy in a frame.
 * @param framePtr  AVFrame
 * @param frame  Frame to copy in, as either a Frame or an AVFrame pointer
 */
/// @types ff_copyin_frame@sync(framePtr: number, frame: Frame | number): @promise@void@
var ff_copyin_frame = Module.ff_copyin_frame = function(framePtr, frame) {
    if (typeof frame === "number") {
        // This is a frame pointer, not a libav.js Frame
        av_frame_unref(framePtr);
        var ret = av_frame_ref(framePtr, frame);
        if (ret < 0)
            throw new Error("Failed to reference frame data: " + ff_error(ret));
        av_frame_unref(frame);
        av_frame_free_js(frame);
        return;
    }

    if (frame.width)
        return ff_copyin_frame_video(framePtr, frame);

    var format = frame.format;
    var channels = frame.channels;
    if (!channels) {
        // channel_layout must be set
        var channel_layout = frame.channel_layout;
        channels = 0;
        while (channel_layout) {
            if (channel_layout&1) channels++;
            channel_layout>>>=1;
        }
    }

    [
        "channel_layout", "channels", "format", "pts", "ptshi", "sample_rate",
        "time_base_num", "time_base_den"
    ].forEach(function(key) {
        if (key in frame)
            CAccessors["AVFrame_" + key + "_s"](framePtr, frame[key]);
    });

    var nb_samples;
    if (format >= 5 /* U8P */) {
        // Planar, so nb_samples is out of data[0]
        nb_samples = frame.data[0].length;
    } else {
        // Non-planar, divide by channel count
        nb_samples = frame.data.length / channels;
    }

    AVFrame_nb_samples_s(framePtr, nb_samples);

    // We may or may not need to actually allocate
    if (av_frame_make_writable(framePtr) < 0) {
        var ret = av_frame_get_buffer(framePtr, 0);
        if (ret < 0)
            throw new Error("Failed to allocate frame buffers: " + ff_error(ret));
    }

    if (format >= 5 /* U8P */) {
        // A planar format
        for (var ci = 0; ci < channels; ci++) {
            var data = AVFrame_data_a(framePtr, ci);
            var inData = frame.data[ci];
            switch (format) {
                case 5: // U8P
                    copyin_u8(data, inData);
                    break;

                case 6: // S16P
                    copyin_s16(data, inData);
                    break;

                case 7: // S32P
                    copyin_s32(data, inData);
                    break;

                case 8: // FLT
                    copyin_f32(data, inData);
                    break;
            }
        }

    } else {
        var data = AVFrame_data_a(framePtr, 0);
        var inData = frame.data;

        // FIXME: Need to support *every* format here
        switch (format) {
            case 0: // U8
                copyin_u8(data, inData);
                break;

            case 1: // S16
                copyin_s16(data, inData);
                break;

            case 2: // S32
                copyin_s32(data, inData);
                break;

            case 3: // FLT
                copyin_f32(data, inData);
                break;
        }

    }
};

// Copy in a video frame. Used internally by ff_copyin_frame.
var ff_copyin_frame_video = Module.ff_copyin_frame_video = function(framePtr, frame) {
    [
        "format", "height", "key_frame", "pict_type", "pts", "ptshi", "width",
        "time_base_num", "time_base_den"
    ].forEach(function(key) {
        if (key in frame)
            CAccessors["AVFrame_" + key + "_s"](framePtr, frame[key]);
    });

    if ("sample_aspect_ratio" in frame) {
        AVFrame_sample_aspect_ratio_s(framePtr, frame.sample_aspect_ratio[0],
            frame.sample_aspect_ratio[1]);
    }

    var crop = frame.crop || {top: 0, bottom: 0, left: 0, right: 0};
    AVFrame_crop_top_s(framePtr, crop.top);
    AVFrame_crop_bottom_s(framePtr, crop.bottom);
    AVFrame_crop_left_s(framePtr, crop.left);
    AVFrame_crop_right_s(framePtr, crop.right);

    var desc = av_pix_fmt_desc_get(frame.format);
    var log2cw = AVPixFmtDescriptor_log2_chroma_w(desc);
    var log2ch = AVPixFmtDescriptor_log2_chroma_h(desc);

    // We may or may not need to actually allocate
    if (av_frame_make_writable(framePtr) < 0) {
        var ret = av_frame_get_buffer(framePtr, 0);
        if (ret < 0)
            throw new Error("Failed to allocate frame buffers: " + ff_error(ret));
    }

    // If layout is not provided, assume packed
    var layout = frame.layout;
    if (!layout) {
        layout = [];

        // VERY simple bpp, assuming all components are 8-bit
        var bpp = 1;
        if (!(AVPixFmtDescriptor_flags(desc) & 0x10) /* planar */)
            bpp *= AVPixFmtDescriptor_nb_components(desc);

        var off = 0;
        for (var p = 0; p < 8 /* AV_NUM_DATA_POINTERS */; p++) {
            var linesize = AVFrame_linesize_a(framePtr, p);
            if (!linesize)
                break;
            var w = frame.width;
            var h = frame.height;
            if (p === 1 || p === 2) {
                w >>= log2cw;
                h >>= log2ch;
            }
            layout.push({
                offset: off,
                stride: w * bpp
            });
            off += w * h * bpp;
        }
    }

    // Copy it in
    for (var p = 0; p < layout.length; p++) {
        var lplane = layout[p];
        var linesize = AVFrame_linesize_a(framePtr, p);
        var data = AVFrame_data_a(framePtr, p);
        var h = frame.height;
        if (p === 1 || p === 2)
            h >>= log2ch;
        var ioff = lplane.offset;
        var ooff = 0;
        var stride = Math.min(lplane.stride, linesize);
        for (var y = 0; y < h; y++) {
            copyin_u8(
                data + ooff,
                frame.data.subarray(ioff, ioff + stride)
            );
            ooff += linesize;
            ioff += lplane.stride;
        }
    }
};

/**
 * Copy out a packet.
 * @param pkt  AVPacket
 */
/// @types ff_copyout_packet@sync(pkt: number): @promise@Packet@
var ff_copyout_packet = Module.ff_copyout_packet = function(pkt) {
    var data = AVPacket_data(pkt);
    var size = AVPacket_size(pkt);
    var data = copyout_u8(data, size);
    return {
        data: data,
        libavjsTransfer: [data.buffer],
        pts: AVPacket_pts(pkt),
        ptshi: AVPacket_ptshi(pkt),
        dts: AVPacket_dts(pkt),
        dtshi: AVPacket_dtshi(pkt),
        time_base_num: AVPacket_time_base_num(pkt),
        time_base_den: AVPacket_time_base_den(pkt),
        stream_index: AVPacket_stream_index(pkt),
        flags: AVPacket_flags(pkt),
        duration: AVPacket_duration(pkt),
        durationhi: AVPacket_durationhi(pkt),
        side_data: ff_copyout_side_data(pkt)
    };
};

// Copy out a packet's side data. Used internally by ff_copyout_packet.
var ff_copyout_side_data = Module.ff_copyout_side_data = function(pkt) {
    var side_data = AVPacket_side_data(pkt);
    var side_data_elems = AVPacket_side_data_elems(pkt);
    if (!side_data) return null;

    var ret = [];
    for (var i = 0; i < side_data_elems; i++) {
        var data = AVPacketSideData_data(side_data, i);
        var size = AVPacketSideData_size(side_data, i);
        ret.push({
            data: copyout_u8(data, size),
            type: AVPacketSideData_type(side_data, i)
        });
    }

    return ret;
};

/**
 * Copy "out" a packet by just copying its data into a new AVPacket.
 * @param pkt  AVPacket
 */
/// @types ff_copyout_packet_ptr@sync(pkt: number): @promise@number@
var ff_copyout_packet_ptr = Module.ff_copyout_packet_ptr = function(pkt) {
    var ret = av_packet_clone(pkt);
    if (!ret)
        throw new Error("Failed to clone packet");
    return ret;
};

// Versions of ff_copyout_packet
var ff_copyout_packet_versions = {
    default: ff_copyout_packet,
    ptr: ff_copyout_packet_ptr
};

/**
 * Copy in a packet.
 * @param pktPtr  AVPacket
 * @param packet  Packet to copy in, as either a Packet or an AVPacket pointer
 */
/// @types ff_copyin_packet@sync(pktPtr: number, packet: Packet | number): @promise@void@
var ff_copyin_packet = Module.ff_copyin_packet = function(pktPtr, packet) {
    if (typeof packet === "number") {
        // Input packet is an AVPacket pointer, duplicate it
        av_packet_unref(pktPtr);
        var res = av_packet_ref(pktPtr, packet);
        if (res < 0)
            throw new Error("Failed to reference packet: " + ff_error(res));
        av_packet_unref(packet);
        av_packet_free_js(packet);
        return;
    }

    ff_set_packet(pktPtr, packet.data);

    [
        "dts", "dtshi", "duration", "durationhi", "flags", "side_data",
        "side_data_elems", "stream_index", "pts", "ptshi", "time_base_num",
        "time_base_den"
    ].forEach(function(key) {
        if (key in packet)
            CAccessors["AVPacket_" + key + "_s"](pktPtr, packet[key]);
    });

    if (packet.side_data)
        ff_copyin_side_data(pktPtr, packet.side_data);
};

// Copy in a packet's side data. Used internally by ff_copyin_packet.
var ff_copyin_side_data = Module.ff_copyin_side_data = function(pktPtr, side_data) {
    side_data.forEach(function(elem) {
        var data = av_packet_new_side_data(pktPtr, elem.type, elem.data.length);
        if (data === 0)
            throw new Error("Failed to allocate side data!");
        copyin_u8(data, elem.data);
    });
};

/**
 * Copy out codec parameters.
 * @param codecpar  AVCodecParameters
 */
/// @types ff_copyout_codecpar@sync(codecpar: number): @promise@CodecParameters@
var ff_copyout_codecpar = Module.ff_copyout_codecpar = function(codecpar) {
    return {
        bit_rate: AVCodecParameters_bit_rate(codecpar),
        channel_layoutmask: AVCodecParameters_channel_layoutmask(codecpar),
        channels: AVCodecParameters_channels(codecpar),
        chroma_location: AVCodecParameters_chroma_location(codecpar),
        codec_id: AVCodecParameters_codec_id(codecpar),
        codec_tag: AVCodecParameters_codec_tag(codecpar),
        codec_type: AVCodecParameters_codec_type(codecpar),
        color_primaries: AVCodecParameters_color_primaries(codecpar),
        color_range: AVCodecParameters_color_range(codecpar),
        color_space: AVCodecParameters_color_space(codecpar),
        color_trc: AVCodecParameters_color_trc(codecpar),
        format: AVCodecParameters_format(codecpar),
        height: AVCodecParameters_height(codecpar),
        level: AVCodecParameters_level(codecpar),
        profile: AVCodecParameters_profile(codecpar),
        sample_rate: AVCodecParameters_sample_rate(codecpar),
        width: AVCodecParameters_width(codecpar),
        extradata: ff_copyout_codecpar_extradata(codecpar)
    };
};

// Copy out codec parameter extradata. Used internally by ff_copyout_codecpar.
var ff_copyout_codecpar_extradata = Module.ff_copyout_codecpar_extradata = function(codecpar) {
    var extradata = AVCodecParameters_extradata(codecpar);
    var extradata_size = AVCodecParameters_extradata_size(codecpar);
    if (!extradata || !extradata_size) return null;
    return copyout_u8(extradata, extradata_size);
};

/**
 * Copy in codec parameters.
 * @param codecparPtr  AVCodecParameters
 * @param codecpar  Codec parameters to copy in.
 */
/// @types ff_copyin_codecpar@sync(codecparPtr: number, codecpar: CodecParameters): @promise@void@
var ff_copyin_codecpar = Module.ff_copyin_codecpar = function(codecparPtr, codecpar) {
    [
        "bit_rate", "channel_layoutmask", "channels", "chroma_location",
        "codec_id", "codec_tag", "codec_type", "color_primaries", "color_range",
        "color_space", "color_trc", "format", "height", "level", "profile",
        "sample_rate", "width"
    ].forEach(function(key) {
        if (key in codecpar)
            CAccessors["AVCodecParameters_" + key + "_s"](codecparPtr, codecpar[key]);
    });

    if (codecpar.extradata)
        ff_copyin_codecpar_extradata(codecparPtr, codecpar.extradata);
};

// Copy in codec parameter extradata. Used internally by ff_copyin_codecpar.
var ff_copyin_codecpar_extradata = Module.ff_copyin_codecpar_extradata = function(codecparPtr, extradata) {
    var extradataPtr = malloc(extradata.length);
    copyin_u8(extradataPtr, extradata);
    AVCodecParameters_extradata_s(codecparPtr, extradataPtr);
    AVCodecParameters_extradata_size_s(codecparPtr, extradata.length);
};

/**
 * Allocate and copy in a 32-bit int list.
 * @param list  List of numbers to copy in
 */
/// @types ff_malloc_int32_list@sync(list: number[]): @promise@number@
var ff_malloc_int32_list = Module.ff_malloc_int32_list = function(list) {
    var ptr = malloc(list.length * 4);
    if (ptr === 0)
        throw new Error("Failed to malloc");
    var arr = new Uint32Array(Module.HEAPU8.buffer, ptr, list.length);
    for (var i = 0; i < list.length; i++)
        arr[i] = list[i];
    return ptr;
};

/**
 * Allocate and copy in a 64-bit int list.
 * @param list  List of numbers to copy in
 */
/// @types ff_malloc_int64_list@sync(list: number[]): @promise@number@
var ff_malloc_int64_list = Module.ff_malloc_int64_list = function(list) {
    var ptr = malloc(list.length * 8);
    if (ptr === 0)
        throw new Error("Failed to malloc");
    var arr = new Int32Array(Module.HEAPU8.buffer, ptr, list.length*2);
    for (var i = 0; i < list.length; i++) {
        arr[i*2] = list[i];
        arr[i*2+1] = (list[i]<0)?-1:0;
    }
    return ptr;
};

/**
 * Allocate and copy in a string array. The resulting array will be
 * NULL-terminated.
 * @param arr  Array of strings to copy in.
 */
/// @types ff_malloc_string_array@sync(arr: string[]): @promise@number@
var ff_malloc_string_array = Module.ff_malloc_string_array = function(arr) {
    var ptr = malloc((arr.length + 1) * 4);
    if (ptr === 0)
        throw new Error("Failed to malloc");
    var inArr = new Uint32Array(Module.HEAPU8.buffer, ptr, arr.length + 1);
    var i;
    for (i = 0; i < arr.length; i++)
        inArr[i] = av_strdup(arr[i]);
    inArr[i] = 0;
    return ptr;
};

/**
 * Free a string array allocated by ff_malloc_string_array.
 * @param ptr  Pointer to the array to free.
 */
/// @types ff_free_string_array@sync(ptr: number): @promise@void@
var ff_free_string_array = Module.ff_free_string_array = function(ptr) {
    var iPtr = ptr / 4;
    for (;; iPtr++) {
        var elPtr = Module.HEAPU32[iPtr];
        if (!elPtr)
            break;
        free(elPtr);
    }
    free(ptr);
};

// Convert arguments to an array of string arguments (internal)
function convertArgs(argv0, args) {
    var ret = [argv0];
    ret = ret.concat(Array.prototype.slice.call(args, 0));
    for (var i = 0; i < ret.length; i++) {
        var arg = ret[i];
        if (typeof arg !== "string") {
            if ("length" in arg) {
                // Array of strings
                ret.splice.apply(ret, [i, 1].concat(arg));
            } else {
                // Just stringify it
                ret[i] = "" + arg;
            }
        }
    }
    return ret;
}

// Helper to run a main()
function runMain(main, name, args) {
    args = convertArgs(name, args);
    var argv = ff_malloc_string_array(args);
    Module.fsThrownError = null;
    var ret = null;
    try {
        ret = main(args.length, argv);
    } catch (ex) {
        if (ex && ex.name === "ExitStatus")
            ret = ex.status;
        else if (ex === "unwind")
            ret = EXITSTATUS;
        else
            throw ex;
    }

    function cleanup() {
        ff_free_string_array(argv);
    }

    if (ret && ret.then) {
        return ret.then(function(ret) {
            cleanup();
            return ret;
        }).catch(function(ex) {
            cleanup();
            if (ex && ex.name === "ExitStatus")
                return Promise.resolve(ex.status);
            else if (ex === "unwind")
                return Promise.resolve(EXITSTATUS);
            else
                return Promise.reject(ex);
        }).then(function(ret) {
            if (Module.fsThrownError) {
                var thr = Module.fsThrownError;
                Module.fsThrownError = null;
                throw thr;
            }
            return ret;
        });
    } else {
        cleanup();
        if (Module.fsThrownError) {
            var thr = Module.fsThrownError;
            Module.fsThrownError = null;
            throw thr;
        }
        return ret;
    }
}

/**
 * Frontend to the ffmpeg CLI (if it's compiled in). Pass arguments as strings,
 * or you may intermix arrays of strings for multiple arguments.
 *
 * NOTE: ffmpeg 6.0 and later require threads for the ffmpeg CLI. libav.js
 * *does* support the ffmpeg CLI on unthreaded environments, but to do so, it
 * uses an earlier version of the CLI, from 5.1.3. The libraries are still
 * modern, and if running libav.js in threaded mode, the ffmpeg CLI is modern as
 * well. As time passes, these two versions will drift apart, so make sure you
 * know whether you're running in threaded mode or not!
 */
/// @types ffmpeg@sync(...args: (string | string[])[]): @promsync@number@
var ffmpeg = Module.ffmpeg = function() {
    return runMain(ffmpeg_main, "ffmpeg", arguments);
};

/**
 * Frontend to the ffprobe CLI (if it's compiled in). Pass arguments as strings,
 * or you may intermix arrays of strings for multiple arguments.
 */
/// @types ffprobe@sync(...args: (string | string[])[]): @promsync@number@
var ffprobe = Module.ffprobe = function() {
    return runMain(ffprobe_main, "ffprobe", arguments);
};


  return LibAVFactory.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = LibAVFactory;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return LibAVFactory; });
else if (typeof exports === 'object')
  exports["LibAVFactory"] = LibAVFactory;
/*
 * Copyright (C) 2019-2024 Yahweasel
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
 * CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

if (/* We're in a worker */
    typeof importScripts !== "undefined" &&
    /* We're not being loaded with noworker from the main code */
    typeof LibAV === "undefined" &&
    /* We're not being loaded as a thread */
    (
        (typeof self === "undefined" && typeof Module === "undefined") ||
        (typeof self !== "undefined" && self.name !== "em-pthread")
    )
    ) (function() {
    var libav;

    Promise.all([]).then(function() {
        /* We're the primary code for this worker. The host should ask us to
         * load immediately. */
        return new Promise(function(res, rej) {
            onmessage = function(e) {
                if (e && e.data && e.data.config) {
                    LibAVFactory({
                        wasmurl: e.data.config.wasmurl,
                        variant: e.data.config.variant
                    }).then(res).catch(rej);
                }
            };
        });

    }).then(function(lib) {
        libav = lib;

        // Now we're ready for normal messages
        onmessage = function(e) {
            var id = e.data[0];
            var fun = e.data[1];
            var args = e.data.slice(2);
            var ret = void 0;
            var succ = true;

            function reply() {
                var transfer = [];
                if (ret && ret.libavjsTransfer)
                    transfer = ret.libavjsTransfer
                try {
                    postMessage([id, fun, succ, ret], transfer);
                } catch (ex) {
                    try {
                        ret = JSON.parse(JSON.stringify(
                            ret, function(k, v) { return v; }
                        ));
                        postMessage([id, fun, succ, ret], transfer);
                    } catch (ex) {
                        postMessage([id, fun, succ, "" + ret]);
                    }
                }
            }

            try {
                ret = libav[fun].apply(libav, args);
            } catch (ex) {
                succ = false;
                ret = ex;
            }
            if (succ && ret && ret.then) {
                // Let the promise resolve
                ret.then(function(res) {
                    ret = res;
                }).catch(function(ex) {
                    succ = false;
                    ret = ex;
                }).then(reply);

            } else reply();
        };

        libav.onwrite = function(name, pos, buf) {
            /* We have to buf.slice(0) so we don't duplicate the entire heap just
             * to get one part of it in postMessage */
            buf = buf.slice(0);
            postMessage(["onwrite", "onwrite", true, [name, pos, buf]], [buf.buffer]);
        };

        libav.onread = function(name, pos, len) {
            postMessage(["onread", "onread", true, [name, pos, len]]);
        };

        libav.onblockread = function(name, pos, len) {
            postMessage(["onblockread", "onblockread", true, [name, pos, len]]);
        };

        postMessage(["onready", "onready", true, null]);

    }).catch(function(ex) {
        console.log("Loading LibAV failed\n" + ex + "\n" + ex.stack);
    });
})();
