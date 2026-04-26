<template>
  <h1 class="py-6 text-center">Terms And Conditions</h1>
  <section class="mx-auto h-[70vh] max-w-7xl px-4 py-10">
    <!-- terms and conditions -->
    <section
      class="flex h-full w-full flex-col gap-4 overflow-y-auto rounded-xl border border-gray-300 p-10"
    >
      <div class="row">
        <h2 class="mr-2 inline">Last Updated:</h2>
        <p class="inline">August 1, 2024</p>
      </div>
      <div class="row">
        <h2>1. Acceptance of Terms</h2>
        <p>
          These Terms constitute a legally binding agreement between you and
          ButFor regarding your access to and use of the Website. You
          acknowledge that you have read and understood these Terms and agree to
          be bound by them.
        </p>
      </div>
      <div class="row">
        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time without prior
          notice. We will post any changes to the Terms on the Website. Your
          continued access to or use of the Website following the posting of any
          revised Terms constitutes your acceptance of the revised Terms.
        </p>
      </div>
      <div class="row">
        <h2>3. User Accounts</h2>
        <p>
          You may be required to create an account to access certain features of
          the Website. You are responsible for maintaining the confidentiality
          of your account information, including your username and password. You
          are also responsible for all activity that occurs under your account.
        </p>
      </div>
      <div class="row">
        <h2>4. Use of the Website</h2>
        <p>
          You may use the Website only for lawful purposes and in accordance
          with these Terms. You agree not to use the Website:
        </p>
        <ul class="list-inside list-disc pl-2">
          <li>In any way that violates any applicable law or regulation.</li>
          <li>
            For any unauthorized or illegal purpose, such as infringing on the
            intellectual property rights of others.
          </li>
          <li>
            To transmit any harmful or malicious content, such as viruses or
            malware.
          </li>
          <li>
            To interfere with or disrupt the Website or any servers or networks
            connected to the Website.
          </li>
          <li>To impersonate any person or entity.</li>
        </ul>
      </div>

      <div class="row">
        <h2>5. Intellectual Property</h2>
        <p>
          The Website and its content, including but not limited to text,
          graphics, logos, images, and software, are the property of ButFor or
          its licensors and are protected by copyright, trademark, and other
          intellectual property laws. You may not use any content from the
          Website without the express written permission of ButFor.
        </p>
      </div>
      <div class="row">
        <h2>6. Disclaimers</h2>
        <p>
          THE WEBSITE AND ALL CONTENT AND SERVICES PROVIDED THEREON ARE PROVIDED
          "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED. BUTFOR DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
          INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS
          FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. BUTFOR DOES NOT
          WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT
          DEFECTS WILL BE CORRECTED, OR THAT THE WEBSITE OR THE SERVER THAT
          MAKES IT AVAILABLE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
        </p>
      </div>

      <div class="row">
        <h2>7. Limitation of Liability</h2>
        <p>
          BUTFOR SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED
          TO YOUR ACCESS TO OR USE OF THE WEBSITE OR ANY CONTENT OR SERVICES
          PROVIDED THEREON, EVEN IF BUTFOR HAS BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES.
        </p>
      </div>

      <div class="row">
        <h2>8. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless ButFor, its officers,
          directors, employees, agents, and licensors from and against any and
          all claims, demands, losses, liabilities, costs, or expenses
          (including attorneys' fees) arising out of or related to your
          violation of these Terms.
        </p>
      </div>

      <div class="row">
        <h2>9. Termination</h2>
        <p>
          We may terminate your access to the Website for any reason, at any
          time, without notice.
        </p>
      </div>

      <div class="row">
        <h2>10. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the State of Delaware, without regard to its conflict of laws
          principles.
        </p>
      </div>
      <div class="row">
        <h2>11. Dispute Resolution</h2>

        <p>
          Any dispute arising out of or relating to these Terms shall be
          resolved by binding arbitration in accordance with the rules of the
          American Arbitration Association. The arbitration shall be held in
          Wilmington, Delaware. The decision of the arbitrator shall be final
          and binding on the parties.
        </p>
      </div>
      <div class="row">
        <h2>12. Entire Agreement</h2>
        <p>
          These Terms constitute the entire agreement between you and ButFor
          with respect to your access to and use of the Website.
        </p>
      </div>
      <div class="row">
        <h2>13. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
          ButFor, Inc. 725-986-6090
        </p>
      </div>
    </section>
  </section>
</template>
<script setup>
import { useHead } from "@vueuse/head";
useHead({ title: "ButFor - Terms & Conditions", meta: [{ name: "description", content: "ButFor's terms and conditions of service. Please read these terms carefully before using the ButFor platform." }] });
</script>
<style lang="postcss" scoped>
.row {
  @apply text-base;
  > h2 {
    @apply font-semibold;
  }
}
</style>
