(function() {var implementors = {};
implementors["eosio_cdt"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"eosio_cdt/struct.PrimaryTableIterator.html\" title=\"struct eosio_cdt::PrimaryTableIterator\">PrimaryTableIterator</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"eosio/table/trait.Table.html\" title=\"trait eosio::table::Table\">Table</a>,&nbsp;</span>","synthetic":false,"types":["eosio_cdt::table_primary::PrimaryTableIterator"]},{"text":"impl&lt;'a, K, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/double_ended/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::double_ended::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"eosio_cdt/struct.SecondaryTableIterator.html\" title=\"struct eosio_cdt::SecondaryTableIterator\">SecondaryTableIterator</a>&lt;'a, K, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"eosio_cdt/trait.IntoNativeSecondaryKey.html\" title=\"trait eosio_cdt::IntoNativeSecondaryKey\">IntoNativeSecondaryKey</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"eosio/table/trait.Table.html\" title=\"trait eosio::table::Table\">Table</a>,&nbsp;</span>","synthetic":false,"types":["eosio_cdt::table_secondary::SecondaryTableIterator"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()